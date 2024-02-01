import { NestFactory } from '@nestjs/core';
import { MonoApp1Module } from './mono-app-1.module';

async function bootstrap() {
  const app = await NestFactory.create(MonoApp1Module);
  await app.listen(3000);
}
bootstrap();
