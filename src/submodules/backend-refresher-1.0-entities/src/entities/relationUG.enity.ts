/* eslint-disable prettier/prettier */
import { Entity,  ManyToMany } from 'typeorm';
import { GroupDto } from '../../../backend-refresher-1.0-dtos/src/dtos/group.dto';
import { UserDto } from '../../../backend-refresher-1.0-dtos/src/dtos/user.dto';

import { EntityBase } from './entityBase';
import { Group } from './group.entity';
import { User } from './user.entity';

@Entity()
export class Relation extends EntityBase{

  
  @ManyToMany(() => User, (user) => user.id)
  user: UserDto[];

  
  @ManyToMany(() => Group, (group) => group.id)
  group: GroupDto[];

}