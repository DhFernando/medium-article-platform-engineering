import { Injectable } from '@nestjs/common';

@Injectable()
export class MonoApp1Service {
  getHello(): string {
    return 'Hello World! from mono app 1';
  }
}
