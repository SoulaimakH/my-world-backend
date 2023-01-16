import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { User } from "../entities/user";


@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor() {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'spacy',
      entities: [User],
      synchronize: true,
    };
  }
}