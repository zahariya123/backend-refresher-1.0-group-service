/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import {
  Controller,  Get,  Post,  Body,  Param,  Delete,  Query,  Put,} from '@nestjs/common';
import { GroupDto } from 'src/submodules/backend-refresher-1.0-dtos/src/dtos/group.dto';
import { UserDto } from 'src/submodules/backend-refresher-1.0-dtos/src/dtos/user.dto';

import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}
 
  @Get()
  async getGroups(){
    try{
      let fetchedgroups = await this.groupsService.findAll();
      return fetchedgroups;
    } catch (err) {
      return err;
    }
  }

  @Post()
  async createGroup(
    @Body() group: GroupDto,
    @Query() query: { userId: number },
  ) {
    
    try {
      let { userId } = query;
      let createdGroup = await this.groupsService.createGroup(group, userId);
      return createdGroup
    } catch (error) {
      return error;
    }
  }

  @Get('/users-in-group')
  async UsersinGroup(@Query() query: { groupId: number }) {
    try {
      let { groupId } = query;
      let fetchedUsersInGroup = await this.groupsService.fetchedUsersInGroup(groupId);
      return fetchedUsersInGroup;
    } catch (error) {
      return error;
    }
  }

  @Post('/create-user')
  async createUser(@Body() user: UserDto) {
    try {
      let createdUser = await this.groupsService.createUser(user)
      return createdUser
      //console.log('control is here', user);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  @Delete(':id')
  async deleteUser(@Param('id') groupId: number) {
    try{
      let deletedUser = await this.groupsService.deleteGroup(groupId);
      return deletedUser
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  @Get('/get-group')
  async getGroup(@Query() query: { groupId: number }) {
    try{
      let { groupId } = query;
      let UpdatedGroup = await this.groupsService.getGroup(groupId);
      return UpdatedGroup;
    } catch (err) {
      console.log(err);
    }
  }

}
