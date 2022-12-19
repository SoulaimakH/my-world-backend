import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from "./Authentification/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfigService } from "./typorem/config";
import { RoomService } from './chat/service/room-service/room/room.service';
import { ChatModule } from './chat/chat.module';


@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal : true ,
      }
    ),
    AuthModule,
    TypeOrmModule.forRootAsync({
    useClass: TypeOrmConfigService
  }),
    ChatModule,
    ],
  controllers: [AppController],
  providers: [AppService, RoomService],
})
export class AppModule {}
