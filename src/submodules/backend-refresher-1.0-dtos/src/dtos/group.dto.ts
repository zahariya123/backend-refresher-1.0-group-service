/* eslint-disable prettier/prettier */
import { ContentDto } from './content.dto';
import { DtoBase } from './dtoBase';
import { UserDto } from "./user.dto";

export class GroupDto extends DtoBase {
  title: string;
  type: string;

}