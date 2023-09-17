import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, ConnectedSocket } from "@nestjs/websockets";
import { Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class ChatGateway {
  @WebSocketServer()
  server;

  // @SubscribeMessage('request')
  // handleMessage(@MessageBody() message: string): void {
  //   this.server.emit('response', message);
  // }

  @SubscribeMessage('request')
  handleEvent(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket,
  ) {
    client.emit('response', data);
  }
}