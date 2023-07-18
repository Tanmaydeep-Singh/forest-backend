import { Injectable } from '@nestjs/common';

@Injectable()
export class TreesService {
  getHello(): string {
    return 'Hello Trees!';
  }
}
