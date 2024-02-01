import { NestFactory } from '@nestjs/core';
import { MonoApp2Module } from './mono-app-2.module';

async function bootstrap() {
  const app = await NestFactory.create(MonoApp2Module);
  await app.listen(3000);
}
bootstrap();
