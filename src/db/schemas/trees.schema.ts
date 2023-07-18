import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TreesDocument = HydratedDocument<Trees>;
export const TreesSchemaName = 'Trees';
@Schema()
export class Trees {
  @Prop()
  species: string;
  @Prop()
  location: string;
  @Prop({ default: 0 })
  treeAge: number;
}

export const TreesSchema = SchemaFactory.createForClass(Trees);
