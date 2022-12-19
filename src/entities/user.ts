import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { RoomEntity } from "../chat/model/room.entity";

@Entity({ name: 'users' })
export class UserEntity {

  /** The id user. */
  @PrimaryColumn('uuid')
  id: string;

  /** The nom. */
  @Column()
  nom:string ;

  /** The prenom. */
  @Column()
  prenom:string ;

  /** The email. */
  @Column()
  email:string;

  /** The login. */
  @Column()
  login:string;

  /** The password. */
  @Column()
  password:string;

  /** The roles. */
  @Column()
  roles:string;

  /** Created rooms */
  @OneToMany(()=> RoomEntity , (room) => room.owner)
  created_rooms
}