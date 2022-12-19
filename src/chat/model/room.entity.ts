import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity, JoinColumn, JoinTable,
  ManyToMany, ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { UserEntity } from "../../entities/user";


@Entity('room')
export class RoomEntity {

  /** id */
  @PrimaryGeneratedColumn()
  id: number;

  /** title */
  @Column()
  title: string;

  /** description */
  @Column({nullable: true})
  description: string ;

  /** room owner (created by :) */
  @ManyToOne(()=>UserEntity , (user) => user.created_rooms , {cascade: true})
  @JoinColumn({ name: "owner_id", referencedColumnName: "id" })
  @Column()
  owner : UserEntity;

  /** room users */
  @ManyToMany(() => UserEntity)
  @JoinTable()
  @Column()
  users : UserEntity[];

  /** creation date */
  @CreateDateColumn()
  created_at: Date;
  /** update date */
  @UpdateDateColumn()
  updated_at: Date;
  /** delete date */
  @DeleteDateColumn()
  deleted_at: Date;

}