import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class CountryService {
  constructor(private readonly prisma: PrismaService) {
  }

  /*create(createCountryDto: CreateCountryDto) {
    return 'This action adds a new country';
  }*/

  findAll() {
    return this.prisma.country.findMany({
      include:{
        breed: true,
      }
    });
  }

  findOne(id: number) {
    return this.prisma.country.findUnique({
      where: {id},
      include:{
        breed: true,
      }
    })
  }

  /*update(id: number, updateCountryDto: UpdateCountryDto) {
    return `This action updates a #${id} country`;
  }*/

  /*remove(id: number) {
    return `This action removes a #${id} country`;
  }*/
}
