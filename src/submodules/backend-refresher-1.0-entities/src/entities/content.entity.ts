/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { EntityBase } from "./entityBase";
import { ContentType } from "../../../backend-refresher-1.0-dtos/src/enums/contentType.enum"
import { User } from "./user.entity";
import { UserDto } from "../../../backend-refresher-1.0-dtos/src/dtos/user.dto";
import { Option } from "./option.entity";
import { OptionDto } from "../../../backend-refresher-1.0-dtos/src/dtos/option.dto";

import { Group } from './group.entity';
import { GroupDto } from "../../../backend-refresher-1.0-dtos/src/dtos/group.dto";
@Entity()
export class Content extends EntityBase {
    
    @Column({
        nullable: false
    })
    title: string;
    
    @Column({
        nullable: false,
        default: ContentType.POST
    })
    type: ContentType;   /// post and poll only

    @Column()
    body: string;

    @Column()
    imageUrls: string;
    
    @Column()
    videoUrl: string;

    @ManyToOne(()=>User,user=>user.contents)
    user: UserDto;

    @OneToMany(()=>Option,option=>option.content)
    options:OptionDto[];

    
  @ManyToOne(() => Group, (group) => group.id)
  group: GroupDto[];

    // userId,
    // groupId 
}