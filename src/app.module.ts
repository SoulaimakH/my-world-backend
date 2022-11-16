import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from "./Authentification/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfigService } from "./typorem/config";

@Module({
  imports: [AuthModule,
    TypeOrmModule.forRootAsync({
    useClass: TypeOrmConfigService
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
