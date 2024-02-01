import { Test, TestingModule } from '@nestjs/testing';
import { MonoApp2Controller } from './mono-app-2.controller';
import { MonoApp2Service } from './mono-app-2.service';

describe('MonoApp2Controller', () => {
  let monoApp2Controller: MonoApp2Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MonoApp2Controller],
      providers: [MonoApp2Service],
    }).compile();

    monoApp2Controller = app.get<MonoApp2Controller>(MonoApp2Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(monoApp2Controller.getHello()).toBe('Hello World!');
    });
  });
});
