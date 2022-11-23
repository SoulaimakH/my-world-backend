import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from "./Authentification/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfigService } from "./typorem/config";
import { APP_GUARD } from "@nestjs/core";
import { AtGuard } from "./Guards/atGuard";

@Module({
  imports: [AuthModule,
    TypeOrmModule.forRootAsync({
    useClass: TypeOrmConfigService
  }),],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: AtGuard,
  },],
})
export class AppModule {}
