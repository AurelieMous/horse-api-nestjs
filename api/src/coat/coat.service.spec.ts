import { Test, TestingModule } from '@nestjs/testing';
import { CoatService } from './coat.service';

describe('CoatService', () => {
  let service: CoatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoatService],
    }).compile();

    service = module.get<CoatService>(CoatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
