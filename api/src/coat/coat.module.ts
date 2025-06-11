import { Module } from '@nestjs/common';
import { CoatService } from './coat.service';
import { CoatController } from './coat.controller';
import {PrismaService} from "../prisma/prisma.service";

@Module({
  controllers: [CoatController],
  providers: [CoatService, PrismaService],
})
export class CoatModule {}
