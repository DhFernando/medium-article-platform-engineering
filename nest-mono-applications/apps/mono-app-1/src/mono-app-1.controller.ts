import { Controller, Get } from '@nestjs/common';
import { MonoApp1Service } from './mono-app-1.service';

@Controller()
export class MonoApp1Controller {
  constructor(private readonly monoApp1Service: MonoApp1Service) {}

  @Get()
  getHello(): string {
    return this.monoApp1Service.getHello();
  }
}
