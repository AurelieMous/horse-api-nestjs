import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class CoatService {
  constructor(private readonly prisma: PrismaService) {
  }

  // Modérer les routes pour que seulement l'admin
  /*create(createCoatDto: CreateCoatDto) {
    return this.prisma.coat.create({
      data : createCoatDto
    });
  }*/

  findAll() {
    return this.prisma.coat.findMany({
      include: {
        breed: {
          include: {
            breed: true
          }
        }
      }
    });
  }

  findOne(id: number) {
    return this.prisma.coat.findUnique({
      where: {id},
      include: {
        breed: {
          include: {
            breed: true
          }
        }
      }
    });
  }

  /*update(id: number, updateCoatDto: UpdateCoatDto) {
    return `This action updates a #${id} coat`;
  }*/

  /*remove(id: number) {
    return `This action removes a #${id} coat`;
  }*/
}
