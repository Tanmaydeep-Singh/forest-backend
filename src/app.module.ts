import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoDbModule } from './db/mongodb.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { TreesModule } from './trees/trees.module';
import { UsersModule } from './user/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongoDbModule,
    UsersModule,
    TreesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
