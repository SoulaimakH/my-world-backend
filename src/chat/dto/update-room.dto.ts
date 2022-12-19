
import { PartialType } from "@nestjs/mapped-types";
import { AddRoomDto } from "./add-room.dto";
import { UserEntity } from "../../entities/user";

export class RoomUpdateDto extends  PartialType(AddRoomDto) {
  id? : number ;
  title? : string ;
  description? : string ;

}