/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToMany ,JoinTable} from 'typeorm';
import { ContentDto } from '../../../backend-refresher-1.0-dtos/src/dtos/content.dto';
import { UserDto } from '../../../backend-refresher-1.0-dtos/src/dtos/user.dto';
import { Content } from './content.entity';

import { EntityBase } from './entityBase';
import { User } from './user.entity';

@Entity()
export class Group extends EntityBase {

  @Column()
  title: string;

  @Column()
  type: string; 

  @ManyToMany(() => Group)
  @JoinTable()
  users: UserDto[];
}