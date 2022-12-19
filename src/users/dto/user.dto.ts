import { UserEntity } from '../../../../../../../../WebstormProjects/my-world-backend/src/entities/user';

export class UserDto {
  id? : number ;
  nom? : string ;
  prenom? : string ;
  email? : string ;
  login? : string ;
  password? : string;
}