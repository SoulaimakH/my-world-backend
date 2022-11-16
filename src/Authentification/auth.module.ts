import { Module } from '@nestjs/common';
import { AuthService } from "./authentification.service";
import { AuthController } from "./authentification.controller";


@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
