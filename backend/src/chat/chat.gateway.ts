import { WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { ChatService } from './chat.service';
import { AddMessageDto } from './dto/add-message.dto';

@WebSocketGateway({ cors: true })
export class ChatGateway {
  constructor(private readonly chatService: ChatService) {}

  @SubscribeMessage('request')
  create(
    @MessageBody() addMessageDto: AddMessageDto,
    @ConnectedSocket() client: Socket
  ) {
    this.chatService.processMessage(addMessageDto, client);
  }

  @SubscribeMessage('findChat')
  findChat(
    @MessageBody() chatID: string,
    @ConnectedSocket() client: Socket
  ) {
    this.chatService.getChatHistory(chatID, client);
  }
}
