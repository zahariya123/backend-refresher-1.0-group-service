/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne } from "typeorm";
import { ContentDto } from "../../../backend-refresher-1.0-dtos/src/dtos/content.dto";
import { Content } from "./content.entity";
import { EntityBase } from "./entityBase";

@Entity()
export  class Option extends EntityBase{
    @Column()
    title:string

    @Column()
    body:string

    @ManyToOne(()=>Content,content=>content.options)
    content:ContentDto

}