import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { UpdateProjectDto } from './dto/update-project.dto';
import { CreateProjectDto } from './dto/create-project.dto';
import { AssignMaterialDto } from './dto/assign-material.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  findAll() {
    return this.projectsService.findAll();
}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @Post(':id/materials')
assignMaterial(
  @Param('id') id: string,
  @Body() assignMaterialDto: AssignMaterialDto,
) {
  return this.projectsService.assignMaterial(
    Number(id),
    assignMaterialDto,
  );
}

  @Get(':id')
findOne(@Param('id') id: string) {
  return this.projectsService.findOne(Number(id));
}

@Get(':id/materials')
findMaterials(@Param('id') id: string) {
  return this.projectsService.findMaterials(Number(id));
}

@Patch(':id')
update(
  @Param('id') id: string,
  @Body() updateProjectDto: UpdateProjectDto,
) {
  return this.projectsService.update(
    Number(id),
    updateProjectDto,
  );
}

@Delete(':id')
remove(@Param('id') id: string) {
  return this.projectsService.remove(Number(id));
}

@Get(':id/report')
getReport(@Param('id') id: string) {
  return this.projectsService.getReport(Number(id));
}

}