import { Controller, Get, Query } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { FindCitiesDto } from './dto/find-cities.dto';

@Controller('cities')
export class CitiesController {
  constructor(
    private readonly citiesService: CitiesService,
  ) {}

  @Get()
  findByDepartment(@Query() query: FindCitiesDto) {
    return this.citiesService.findByDepartment(query.departmentId);
  }
}