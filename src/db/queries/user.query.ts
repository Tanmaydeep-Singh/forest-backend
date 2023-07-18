import { Model } from 'mongoose';
import { GenericQueryService } from './generic.query';
import { UserSchemaName, UserDocument } from '../schemas/user.schema';
import { BadRequestException } from '@nestjs/common';

export default class UserQueryService extends GenericQueryService<UserDocument> {
  constructor(model: Model<UserDocument>) {
    super(model, UserSchemaName);
  }
  async createEntity(data: any): Promise<UserDocument> {
    const { walletAddress } = data;
    if (await this.checkValidity({ walletAddress }))
      throw new BadRequestException(`${this.modelName} already exists`);
    return super.createEntity(data);
  }
}
