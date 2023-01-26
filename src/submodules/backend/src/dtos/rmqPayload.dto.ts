/* eslint-disable prettier/prettier */
import { PlatformEvents } from "../enums/platformEvents";

export class RMQPayloadDto {

    event?: PlatformEvents;
    payload: any;
    additionalInfo?: any;
    
}