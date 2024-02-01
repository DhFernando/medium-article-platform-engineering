import { Test, TestingModule } from '@nestjs/testing';
import { MonoApp1Controller } from './mono-app-1.controller';
import { MonoApp1Service } from './mono-app-1.service';

describe('MonoApp1Controller', () => {
  let monoApp1Controller: MonoApp1Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MonoApp1Controller],
      providers: [MonoApp1Service],
    }).compile();

    monoApp1Controller = app.get<MonoApp1Controller>(MonoApp1Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(monoApp1Controller.getHello()).toBe('Hello World!');
    });
  });
});
