/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Controller, Get, } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


 
  @Get()
  async getGroups(){
    try{
      let fetchedgroups = await this.appService.findAll();
      console.log(fetchedgroups);
      return fetchedgroups;
    } catch (err) {;
      return err;
    }
  }

}
