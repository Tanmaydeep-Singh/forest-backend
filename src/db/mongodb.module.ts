import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TreesSchema, TreesSchemaName } from './schemas';
import { UserSchema, UserSchemaName } from './schemas';

const importExports = [
  MongooseModule.forFeature([
    { name: UserSchemaName, schema: UserSchema },
    { name: TreesSchemaName, schema: TreesSchema },
  ]),
];

@Module({
  imports: [
    ...importExports,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGO_URL'),
      }),
      inject: [ConfigService],
    }),
  ],

  exports: [...importExports],
})
export class MongoDbModule {}
