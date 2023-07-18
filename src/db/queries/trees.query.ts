import { Model } from 'mongoose';
import { GenericQueryService } from './generic.query';
import { TreesSchemaName, TreesDocument } from '../schemas/trees.schema';
import { BadRequestException } from '@nestjs/common';

export default class UserQueryService extends GenericQueryService<TreesDocument> {
  constructor(model: Model<TreesDocument>) {
    super(model, TreesSchemaName);
  }
  async createEntity(data: any): Promise<TreesDocument> {
    const { walletAddress } = data;
    if (await this.checkValidity({ walletAddress }))
      throw new BadRequestException(`${this.modelName} already exists`);
    return super.createEntity(data);
  }
}
