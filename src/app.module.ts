import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MaterialsModule } from './materials/materials.module';
import { DepartmentsModule } from './departments/departments.module';
import { CitiesModule } from './cities/cities.module';
import { ProjectsModule } from './projects/projects.module';


@Module({
  imports: [PrismaModule, MaterialsModule, DepartmentsModule, CitiesModule, ProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
