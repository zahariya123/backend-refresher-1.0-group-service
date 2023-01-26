/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { queues } from './submodules/backend/src/constants/rmqQueue';
import { Content } from './submodules/backend-refresher-1.0-entities/src/entities/content.entity';
import { Group } from './submodules/backend-refresher-1.0-entities/src/entities/group.entity';
import { Option } from './submodules/backend-refresher-1.0-entities/src/entities/option.entity';
import { User } from './submodules/backend-refresher-1.0-entities/src/entities/user.entity';
import { GroupsModule } from './modules/groups.module';
import { Relation } from './submodules/backend-refresher-1.0-entities/src/entities/relationUG.enity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'backend-socialmedia',
      entities: [ User, Content,Option,Group,Relation      ],
      synchronize: true,
      logging: false
    }),
    ClientsModule.register([
      {
        name:'CONTENT_SERVICE_QUEUE',
        transport: Transport.RMQ,
        options: {
          urls: ["amqps://pkcsycvu:He6SqROu8yJHFqHM-tYzQ2htI79Wq1zo@shrimp.rmq.cloudamqp.com/pkcsycvu"],
          queue: queues.CONTENT_SERVICE_QUEUE,
          queueOptions: {
            durable: true,
          }
        
        },
      },
    ]),
    TypeOrmModule.forFeature([User, Content, Group,Relation]),
    GroupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
