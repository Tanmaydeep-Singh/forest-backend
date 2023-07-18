import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  MONGO_URL: string;

  constructor() {
    this.MONGO_URL = process.env.MONGO_URL;
  }
}
