import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Socket } from 'socket.io';
import OpenAI from 'openai';
import { ConfigService } from '@nestjs/config';
import { AddMessageDto } from './dto/add-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class ChatService {
  private openai;

  constructor(
    @InjectRepository(Message) private readonly messageRepository: Repository<Message>,
    private configService: ConfigService
  ) {
    this.openai = new OpenAI({
      apiKey: this.configService.get<string>('OPENAI_API_KEY'),
    });
  }

  /**
   * this is function is used to create Message in Message Entity.
   * @param addMessageDto this will type of addMessageDto in which
   * we have defined what are the keys we are expecting from body
   * @returns promise of message
   */
  async processMessage(addMessageDto: AddMessageDto, client: Socket): Promise<void> {
    const messageRequest: Message = new Message();
    messageRequest.chatID = addMessageDto.chatID;
    messageRequest.type = addMessageDto.type;
    messageRequest.text = addMessageDto.text;

    this.messageRepository.save(messageRequest);

    const response = await this.openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
          "content": "Act like an Agile Coach. Give advice based on Agile principles and help to generate user stories. Give short answers."
        },
        {
          "role": "user",
          "content": messageRequest.text
        },
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    // response text
    const text = response?.choices?.[0]?.message?.content;

    if (text) {
      const messageResponse: Message = new Message();
      messageResponse.chatID = addMessageDto.chatID;
      messageResponse.type = 'response';
      messageResponse.text = text;

      this.messageRepository.save(messageResponse);
      client.emit('response', messageResponse);
    }
  }

  /**
   * this function used to get data of use whose chatID is passed in parameter
   * @param chatID is type of string, which represent the id of chat.
   * @returns promise of message array
   */
  async getChatHistory(chatID: string, client: Socket): Promise<void> {
    const chatHistory = await this.messageRepository.find({ where: { chatID } });

    client.emit('chat_history', chatHistory);
  }
}