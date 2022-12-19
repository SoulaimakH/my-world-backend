
import { UserEntity } from "../../entities/user";

export class AddRoomDto {
  title? : string ;
  description? : string ;
  owner? : UserEntity;
  users? : UserEntity[];

}