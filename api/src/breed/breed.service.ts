import {Injectable, InternalServerErrorException} from '@nestjs/common';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import {PrismaService} from "../prisma/prisma.service";
import {BreedEntity} from "./entities/breed.entity";
import {Prisma} from "@prisma/client";

@Injectable()
export class BreedService {
  constructor(
      private readonly prisma: PrismaService,
  ) {}

  // Revoir pour la création des relations M2M avec Coat, Category et Use
  async create(createBreedDto: CreateBreedDto) {
    try{
      const { coat, use, category, ...breedData } = createBreedDto;

      // 1. Créer breed de base
      const breed = await this.prisma.breed.create({
        data : {
          ...breedData,
        }
      })

      const breedId = breed.id

      // 2. insérer table many to many
      if(coat && coat.length > 0){
        await this.prisma.breedCoat.createMany({
          data : coat.map((coatId) => (
              {
                breedId,
                coatId
              }
          ))
        })
      }

      if(use && use.length > 0){
        await this.prisma.breedUse.createMany({
          data : use.map((useId) => (
              {
                breedId,
                useId
              }
          ))
        })
      }

      if(category && category.length > 0){
        await this.prisma.breedCategory.createMany({
          data : category.map((categoryId) => (
              {
                breedId,
                categoryId
              }
          ))
        })
      }
      return new BreedEntity(breed);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        console.error('Erreur Prisma :', error.code, error.meta);
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  findAll() {
  return this.prisma.breed.findMany({
    include: {
      coatId: {
        include: {
          coat: true
        }
      },
      useId: {
        include: {
          use: true
        }
      },
      categoryId: {
        include: {
          category: true
        }
      },
      country: true
    }
  });
  }

  findOne(id: number) {
    return this.prisma.breed.findUnique({
      where: { id },
      include: {
        coatId: {
          include: {
            coat: true
          }
        },
        useId: {
          include: {
            use: true
          }
        },
        categoryId: {
          include: {
            category: true
          }
        },
        country: true
      }
    });
  }

  async update(id: number, updateBreedDto: UpdateBreedDto) {
    try {
      const { coat, use, category, ...breedData } = updateBreedDto;

      // 1. Mise à jour du breed
      const breed = await this.prisma.breed.update({
        where: { id },
        data: { ...breedData },
      });

      // 2. Suppression des anciennes relations
      await this.prisma.breedCoat.deleteMany({ where: { breedId: id } });
      await this.prisma.breedUse.deleteMany({ where: { breedId: id } });
      await this.prisma.breedCategory.deleteMany({ where: { breedId: id } });

      // 3. Création des nouvelles relations
      if (coat?.length) {
        await this.prisma.breedCoat.createMany({
          data: coat.map((coatId) => ({ breedId: id, coatId })),
        });
      }

      if (use?.length) {
        await this.prisma.breedUse.createMany({
          data: use.map((useId) => ({ breedId: id, useId })),
        });
      }

      if (category?.length) {
        await this.prisma.breedCategory.createMany({
          data: category.map((categoryId) => ({ breedId: id, categoryId })),
        });
      }

      return new BreedEntity(breed);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        console.error('Erreur Prisma :', error.code, error.meta);
      }
      throw new InternalServerErrorException(error.message);
    }
  }


  remove(id: number) {
    return this.prisma.breed.delete({
      where: {id},
    })
  }
}

// Métier : récupérer les races liées aux catégories, robe et utilisation
// Récupérer les races via le pays