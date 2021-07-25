import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsersEntity } from './users/users.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "kashan",
    "password": "@Password1",
    "database": "aws-crud",
    "synchronize": false,
    "logging": true,
    "entities": [UsersEntity]
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
