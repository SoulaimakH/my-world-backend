import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../../entities/user";
import { AuthHelper } from "./authHelper";
import { Repository } from "typeorm";
import { Tokens } from "../dto/Tokens";
import {v4 as uuidv4} from 'uuid';
import { LoginDto, RegisterDto } from "../dto/auth.dto";

@Injectable()
export class AuthService {
  @InjectRepository(UserEntity)
  private readonly repository: Repository<UserEntity>;

  @Inject(AuthHelper)
  private readonly helper: AuthHelper;



  public async register(body: RegisterDto): Promise<UserEntity | never> {
    const { login, email, password,nom,prenom,role }: RegisterDto = body;
    let user: UserEntity = await this.repository.findOne({ where: { email } });

    if (user) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }

    user = new UserEntity();
    user.id= uuidv4();
    user.login = login;
    user.email = email;
    user.nom=nom;
    user.prenom=prenom;
    user.roles=role
    user.password = this.helper.encodePassword(password);
    user=await this.repository.save(user);
    return user
  }

  public async login(body: LoginDto): Promise<Tokens | never> {
    const { username, password }: LoginDto = body;
    const user: UserEntity = await this.repository.findOne({ where: { login:username } });

    if (!user) {
      throw new HttpException('No user found', HttpStatus.NOT_FOUND);
    }

    const isPasswordValid: boolean = await this.helper.isPasswordValid(password, user.password);

    if (!isPasswordValid) {
      throw new HttpException('No user found', HttpStatus.NOT_FOUND);
    }

    return this.helper.generateToken(user);
  }

  public async refresh(user: UserEntity): Promise<Tokens> {

    return this.helper.generateToken(user);
  }

  public async connected(user: UserEntity): Promise<UserEntity> {
    return  this.helper.validateUser(user)
  }


}