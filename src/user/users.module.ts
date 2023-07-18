import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { MongoDbModule } from 'src/db/mongodb.module';

@Module({
  imports: [MongoDbModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
