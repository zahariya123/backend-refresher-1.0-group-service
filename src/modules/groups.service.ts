/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupDto } from 'src/submodules/backend-refresher-1.0-dtos/src/dtos/group.dto';
import { UserDto } from 'src/submodules/backend-refresher-1.0-dtos/src/dtos/user.dto';
import { Group } from 'src/submodules/backend-refresher-1.0-entities/src/entities/group.entity';
import { User } from 'src/submodules/backend-refresher-1.0-entities/src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group) 
    private groupRepository: Repository<Group>,

    @InjectRepository(User)
    private userRepository: Repository<User>,
  ){}

 

  async createGroup(group: GroupDto, userId: number){
    try{
      let groupEntity = this.groupRepository.create(group)
      
      groupEntity.users = await this.userRepository.find({
        where: { id: userId },
      });
      return groupEntity
      } catch (err) {
      throw err
    }
  }

  async findAll(){
    try{
      let retrievedGroups = await this.groupRepository.find();
      return retrievedGroups;
    } catch (err) {
      throw err
    }
  }

  async deleteGroup(groupId: number){
    try{
      let deletedGroup = await this.groupRepository.delete(groupId);
      return deletedGroup;
    } catch (err) {
      throw err
    }
  }

  async updategroup(group: GroupDto){
    try{
     let users = await this.userRepository.find({ where: { id: 2 } });

      let updateGroup = await this.groupRepository.update(group.id, group);
     return updateGroup;

    } catch (err) {
      throw err
    }
  }

  async createUser(user: UserDto){
    try{
      let userEntity = this.userRepository.create(user)
      let createdUser = await this.userRepository.save(userEntity);
      return createdUser;
    } catch (err) {
      throw err
    }
}


  async getGroup(groupId: number) {
    try {
      let group= await this.groupRepository.find({
        where: { id: groupId },
        relations: ['users']
      })
      return group;
    } catch (error) {
      throw error
    }
  }


  async fetchedUsersInGroup(groupId: number) {
    try {
      let fetchedUsersIngroup = await this.groupRepository.findOne({
        where: { id: groupId },
        relations: ['users']
      },)
      return fetchedUsersIngroup;
    } catch (error) {
      throw error;
    }
  }
}
