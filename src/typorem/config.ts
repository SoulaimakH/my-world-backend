import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Article } from 'src/article/entities/article.entity';
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
<<<<<<< HEAD
      password: 'admin',
      database: 'spacy',
      entities: [User],
      autoLoadEntities: true,
=======
      password: '',
      database: 'spacy',
      entities: [User , Article],
>>>>>>> 8721693924eb9082569ec9d5a4222a4e5e94659c
      synchronize: true,
    };
  }
}