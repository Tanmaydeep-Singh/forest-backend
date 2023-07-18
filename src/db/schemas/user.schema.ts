import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Trees } from './trees.schema';

export type UserDocument = HydratedDocument<User>;
export const UserSchemaName = 'User';
export interface Specifications {
  species: string;
  location: string;
  treeAge: number;
}

@Schema()
export class User {
  @Prop()
  name: string;
  @Prop({ type: String, required: true, unique: true })
  walletAddress: string;
  @Prop()
  location: string;
  @Prop({ default: 0 })
  seedCount: number;
  @Prop({ default: 0 })
  fertilizerCount: number;
  @Prop({
    type: [
      {
        type: {
          species: { type: String, required: true },
          location: { type: String, required: true },
          treeAge: { type: Number, default: 0 },
        },
      },
    ],
  })
  specifications: [Specifications];
  @Prop({ type: [{ type: String, default: [] }] })
  friends: [walletAddress: string];
  @Prop()
  timestamps: true;
}

export const UserSchema = SchemaFactory.createForClass(User);
