import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { RoomEntity } from "./model/room.entity";
import { ChatGateway } from './gateway/chat/chat.gateway';


@Module({
  imports: [TypeOrmModule.forFeature([RoomEntity])],
  providers: [ChatGateway]
})
export class ChatModule {}
