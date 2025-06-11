import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BreedModule } from './breed/breed.module';
import { CategoryModule } from './category/category.module';
import { CoatModule } from './coat/coat.module';
import { UseModule } from './use/use.module';
import { CountryModule } from './country/country.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [BreedModule, CategoryModule, CoatModule, UseModule, CountryModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
