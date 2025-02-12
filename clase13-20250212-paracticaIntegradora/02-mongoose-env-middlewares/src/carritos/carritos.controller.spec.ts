import { Test, TestingModule } from '@nestjs/testing';
import { CarritosController } from './carritos.controller';
import { CarritosService } from './carritos.service';

describe('CarritosController', () => {
  let controller: CarritosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarritosController],
      providers: [CarritosService],
    }).compile();

    controller = module.get<CarritosController>(CarritosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
