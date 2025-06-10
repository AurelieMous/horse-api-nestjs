import { Test, TestingModule } from '@nestjs/testing';
import { CoatController } from './coat.controller';
import { CoatService } from './coat.service';

describe('CoatController', () => {
  let controller: CoatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoatController],
      providers: [CoatService],
    }).compile();

    controller = module.get<CoatController>(CoatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
