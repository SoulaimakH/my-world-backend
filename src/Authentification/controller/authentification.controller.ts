import {
  Body,
  ClassSerializerInterceptor,
  Controller, Get,
  HttpCode,
  HttpStatus,
  Inject,
  Post, UseGuards,
  UseInterceptors
} from "@nestjs/common";
import { AuthService } from "../service/authentification.service";
import { LoginDto, RegisterDto } from "../dto/auth.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller('auth')
export class AuthController {
  @Inject(AuthService)
  private readonly service: AuthService;

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

  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  @Get('testToken')
  private test( ) {
    return "hello"
  }


}