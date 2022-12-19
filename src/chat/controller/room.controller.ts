import { Body, Controller, Get, Inject, Param, Post } from "@nestjs/common";
import { RoomService } from "../service/room-service/room/room.service";
import { AddRoomDto } from "../dto/add-room.dto";
import { UserEntity } from "../../entities/user";
import { RoomUpdateDto } from "../dto/update-room.dto";

@Controller('room')
export class RoomController{
  @Inject(RoomService)
  private readonly roomservice : RoomService;

  @Post('addRoom')
  addRoom(@Body()room : AddRoomDto , @Body() creator : UserEntity  ){
    return this.roomservice.createRoom(room , creator )
  }

  @Post('updateRoom')
  updateRoom(@Body()room : RoomUpdateDto  ){
    return this.roomservice.updateRoom(room )
  }

  @Get('deleteRoom/:id')
  deleteRoom(@Param('id')idRoom : number  ){
    return this.roomservice.deleteRoom(idRoom)
  }

}