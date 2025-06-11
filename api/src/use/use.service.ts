import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class UseService {
  constructor(private readonly prisma: PrismaService) {
  }

  /*create(createUseDto: CreateUseDto) {
    return 'This action adds a new use';
  }*/

  findAll() {
    return this.prisma.use.findMany({
      include: {
        breed: {
          include: {
            breed: {
              include: {
                country: true
              }
            }
          }
        },
      }
    });
  }

  findOne(id: number) {
    return this.prisma.use.findUnique({
      where: {id},
      include: {
        breed: {
          include: {
            breed: {
              include: {
                country: true
              }
            }
          }
        }
      }
    });
  }

  /*update(id: number, updateUseDto: UpdateUseDto) {
    return `This action updates a #${id} use`;
  }*/

  /*remove(id: number) {
    return `This action removes a #${id} use`;
  }*/
}
