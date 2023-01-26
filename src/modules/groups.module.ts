/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/submodules/backend-refresher-1.0-entities/src/entities/user.entity';
import { Content } from 'src/submodules/backend-refresher-1.0-entities/src/entities/content.entity';
import { Group } from 'src/submodules/backend-refresher-1.0-entities/src/entities/group.entity';

import { Option } from 'src/submodules/backend-refresher-1.0-entities/src/entities/option.entity';


@Module({
  imports: [    
      TypeOrmModule.forFeature([User, Content,Option,Group])
    
  ],
  controllers: [GroupsController],
  providers: [GroupsService]
})
export class GroupsModule {}
