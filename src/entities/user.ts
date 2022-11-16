import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity({ name: 'users' })
export class User {

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
}