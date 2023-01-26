/* eslint-disable prettier/prettier */
import { ContentDto } from "./content.dto";
import { DtoBase } from "./dtoBase";

export class OptionDto extends DtoBase {

    
    title: string;  /// post and poll only
    body: string;
    content?:ContentDto

}