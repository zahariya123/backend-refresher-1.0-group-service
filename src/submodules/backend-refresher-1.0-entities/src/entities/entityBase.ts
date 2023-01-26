/* eslint-disable prettier/prettier */
import { Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn } from "typeorm";


export class EntityBase {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    creation: Date;

    @UpdateDateColumn()
    modified: Date;

}