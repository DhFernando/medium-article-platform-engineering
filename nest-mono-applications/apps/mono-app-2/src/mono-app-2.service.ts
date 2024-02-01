import { Injectable } from '@nestjs/common';

@Injectable()
export class MonoApp2Service {
  getHello(): string {
    return 'Hello World! from mono app 2';
  }
}
