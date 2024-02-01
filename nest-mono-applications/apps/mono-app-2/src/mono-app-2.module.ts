import { Module } from '@nestjs/common';
import { MonoApp2Controller } from './mono-app-2.controller';
import { MonoApp2Service } from './mono-app-2.service';

@Module({
  imports: [],
  controllers: [MonoApp2Controller],
  providers: [MonoApp2Service],
})
export class MonoApp2Module {}
