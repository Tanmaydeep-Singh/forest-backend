import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import UserQueryService from 'src/db/queries/user.query';
import { UserDocument, UserSchemaName } from 'src/db/schemas';
import { AddFriendDto, SpecificationDto } from './DTO/users.dto';

@Injectable()
export class UsersService {
  userQueryService: UserQueryService;
  constructor(@InjectModel(UserSchemaName) UserModel: Model<UserDocument>) {
    this.userQueryService = new UserQueryService(UserModel);
  }

  getHello(): string {
    return 'Hello Users!';
  }
  async postUser(body) {
    try {
      const newUser = await this.userQueryService.createEntity(body);
      return newUser;
    } catch (error: any) {
      throw new BadRequestException(error);
    }
  }
  async getUser(walletAddress: string) {
    try {
      const user = await this.userQueryService.readEntity({ walletAddress });
      return user;
    } catch (error: any) {
      throw new BadRequestException(error);
    }
  }
  async updateSeedCount(walletAddress: string, seed: number) {
    try {
      const user = await this.userQueryService.readEntity({ walletAddress });
      console.log(user);
      const newSeedCount = Number(user.seedCount) + Number(seed);
      const updateUser = await this.userQueryService.updateEntity(
        { _id: user._id },
        {
          seedCount: Number(newSeedCount),
        },
      );

      return updateUser;
    } catch (error: any) {
      throw new BadRequestException(error);
    }
  }
  async updateFertilizerCount(walletAddress: string, fertilizer: number) {
    try {
      const user = await this.userQueryService.readEntity({ walletAddress });
      console.log('f', user);
      const newFertilizerCount =
        Number(user.fertilizerCount) + Number(fertilizer);
      const updateUser = await this.userQueryService.updateEntity(
        { _id: user._id },
        {
          fertilizerCount: Number(newFertilizerCount),
        },
      );

      return updateUser;
    } catch (error: any) {
      throw new BadRequestException(error);
    }
  }
  async plantSeed(body: SpecificationDto) {
    const { walletAddress, species, location } = body;
    const user = await this.userQueryService.readEntity({ walletAddress });
    const updateSpec = user.specifications;
    console.log('user spec', updateSpec);
    const spec = {
      species: species,
      location: location,
      treeAge: 0,
    };
    updateSpec.push(spec);
    console.log('spcs', spec);
    await this.userQueryService.updateEntity(
      { _id: user._id },
      {
        specifications: updateSpec,
      },
    );
  }
  async addFriend(body: AddFriendDto) {
    const { walletAddress, secondWalletAddress } = body;
    const user = await this.userQueryService.readEntity({ walletAddress });
    const userFriendList = user.friends;
    console.log(userFriendList);
    userFriendList.push(secondWalletAddress);
    await this.userQueryService.updateEntity(
      { _id: user._id },
      {
        friends: userFriendList,
      },
    );
  }
}
