import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  /*create(createCategoryDto: CreateCategoryDto) {
    return 'This action adds a new category';
  }*/

  findAll() {
    return this.prisma.category.findMany(
        {
          include: {
            breed: {
              include: {
                breed: true
              }
            }
          }
        }
    );
  }

  findOne(id: number) {
    return this.prisma.category.findUnique({
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

  /*update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }*/

  /*remove(id: number) {
    return `This action removes a #${id} category`;
  }*/
}
