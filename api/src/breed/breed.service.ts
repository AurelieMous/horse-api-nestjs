import { Injectable } from '@nestjs/common';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import {PrismaService} from "../prisma/prisma.service";
import {BreedEntity} from "./entities/breed.entity";

@Injectable()
export class BreedService {
  constructor(
      private readonly prisma: PrismaService,
  ) {}

  // Revoir pour la création des relations M2M avec Coat, Category et Use
  async create(createBreedDto: CreateBreedDto) {
    const breed = await this.prisma.breed.create({
      data: createBreedDto,
    });
    return new BreedEntity(breed);
  }

  findAll() {
  return this.prisma.breed.findMany();
  }

  findOne(id: number) {
    return this.prisma.breed.findUnique({
      where: { id }
    });
  }

  async update(id: number, updateBreedDto: UpdateBreedDto) {
    const breed = await this.prisma.breed.update({
      where: {id},
      data: updateBreedDto
    });
    return new BreedEntity(breed);
  }

  remove(id: number) {
    return this.prisma.breed.delete({
      where: {id},
    })
  }
}

// Métier : récupérer les races liées aux catégories, robe et utilisation
// Récupérer les races via le pays