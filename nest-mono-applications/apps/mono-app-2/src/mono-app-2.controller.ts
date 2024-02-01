import { Controller, Get } from '@nestjs/common';
import { MonoApp2Service } from './mono-app-2.service';

@Controller()
export class MonoApp2Controller {
  constructor(private readonly monoApp2Service: MonoApp2Service) {}

  @Get()
  getHello(): string {
    return this.monoApp2Service.getHello();
  }
}
