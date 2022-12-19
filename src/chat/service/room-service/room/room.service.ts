import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { RoomEntity } from "../../../model/room.entity";
import { Repository } from "typeorm";
import { RoomUpdateDto } from "../../../dto/update-room.dto";
import { AddRoomDto } from "../../../dto/add-room.dto";
import { UserEntity } from "../../../../entities/user";



@Injectable()
export class RoomService {

  constructor(
    @InjectRepository(RoomEntity )
    private  readonly roomRepository : Repository<RoomEntity> ,
    @InjectRepository(UserEntity )
    private  readonly userRepository : Repository<RoomEntity>

  ) {}

  async createRoom(room : AddRoomDto, creator: UserEntity): Promise<RoomEntity>{

    const newRoom = new RoomEntity();
    const {title,description} = room ;
    newRoom.title = title;
    newRoom.description = description ;

    newRoom.owner = creator
    creator.created_rooms.push(newRoom);

    newRoom.users.push(creator);

    return  await this.roomRepository.save(newRoom);

  }

  async getRoomsByCreator(creator : UserEntity): Promise<RoomEntity[]>{
    return this.roomRepository.findBy({ owner: creator});
  }

  /**return for pagination */
  async getRoomsByUser(userId : string): Promise<RoomEntity[]>{
    const query =  this.roomRepository
      .createQueryBuilder('room')
      .leftJoin('room.users' , 'user')
      .where('user.id = :userId', {userId} )
    return query.execute();
  }
  async updateRoom(room : RoomUpdateDto): Promise<RoomEntity>{
    const {id ,title,description} = room ;

    return  await this.roomRepository.preload({id,title,description});

  }

  async deleteRoom(id : number){

    return await this.roomRepository.softDelete(id);
  }
}
