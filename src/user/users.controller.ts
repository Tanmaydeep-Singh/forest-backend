import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getHello(): string {
    return this.usersService.getHello();
  }
  @Post()
  async createUser(@Body() body) {
    return await this.usersService.postUser(body);
  }
  @Get('fetch-data/:id')
  getUserData(@Param('id') walletAddress: string): any {
    return this.usersService.getUser(walletAddress);
  }

  @Patch('update-seed-count/:walletAddress/:seed')
  updateSeedCount(
    @Param('walletAddress') walletAddress: string,
    @Param('seed') seed: number,
  ): any {
    return this.usersService.updateSeedCount(walletAddress, seed);
  }
  @Patch('update-fertilizer-count/:walletAddress/:fertilizer')
  updateFertilizerCount(
    @Param('walletAddress') walletAddress: string,
    @Param('fertilizer') fertilizer: number,
  ): any {
    return this.usersService.updateFertilizerCount(walletAddress, fertilizer);
  }
  @Post('plant-seed')
  async plantSeed(@Body() body) {
    return this.usersService.plantSeed(body);
  }
  @Post('add-friend')
  async addFriend(@Body() body) {
    return this.usersService.addFriend(body);
  }
}
