import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  UseInterceptors
} from "@nestjs/common";
import { AuthService } from "../service/authentification.service";
import { LoginDto, RegisterDto } from "../dto/auth.dto";
import { User } from "../../entities/user";

@Controller('auth')
export class AuthController {
  @Inject(AuthService)
  private readonly service: AuthService;

  // @Post('register')
  @Post('regitre')
  @UseInterceptors(ClassSerializerInterceptor)
  private register( @Body()body: RegisterDto) {
    return this.service.register(body);
  }
  /*
  * @Get('findByFilter/:params')
    async findByFilter(@Query() query): Promise<Article[]> {*/
  // @Post('oauth/token')
  //@UseGuards(AuthGuard('basic'))
  @HttpCode(HttpStatus.OK)
  @Post('login')
  private login( @Body()query:LoginDto) {
    return this.service.login(query);
  }



}