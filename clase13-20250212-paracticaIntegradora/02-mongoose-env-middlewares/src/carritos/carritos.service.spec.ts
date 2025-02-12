import { Test, TestingModule } from '@nestjs/testing';
import { CarritosService } from './carritos.service';

describe('CarritosService', () => {
  let service: CarritosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarritosService],
    }).compile();

    service = module.get<CarritosService>(CarritosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
