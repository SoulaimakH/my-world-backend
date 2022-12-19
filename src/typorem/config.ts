import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user";
import { RoomEntity } from "../chat/model/room.entity";


@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor() {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'my_world_project_BD',
      //entities: [UserEntity , RoomEntity],
      autoLoadEntities: true,
      synchronize: true,
    };
  }
}