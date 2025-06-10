import { Module } from '@nestjs/common';
import { CoatService } from './coat.service';
import { CoatController } from './coat.controller';

@Module({
  controllers: [CoatController],
  providers: [CoatService],
})
export class CoatModule {}
