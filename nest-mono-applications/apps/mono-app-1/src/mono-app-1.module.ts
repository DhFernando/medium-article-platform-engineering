import { Module } from '@nestjs/common';
import { MonoApp1Controller } from './mono-app-1.controller';
import { MonoApp1Service } from './mono-app-1.service';

@Module({
  imports: [],
  controllers: [MonoApp1Controller],
  providers: [MonoApp1Service],
})
export class MonoApp1Module {}
