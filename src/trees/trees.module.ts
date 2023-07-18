import { Module } from '@nestjs/common';
import { TreesService } from './trees.service';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { TreesController } from './trees.controllers';
import { MongoDbModule } from 'src/db/mongodb.module';

@Module({
  imports: [MongoDbModule],
  controllers: [TreesController],
  providers: [TreesService],
})
export class TreesModule {}
