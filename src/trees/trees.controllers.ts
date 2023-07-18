import { Controller, Get } from '@nestjs/common';
import { TreesService } from './trees.service';

@Controller('trees')
export class TreesController {
  constructor(private readonly treesService: TreesService) {}

  @Get()
  getHello(): string {
    return this.treesService.getHello();
  }
}
