import { Body, Controller, Get, Post, Delete, Param, Patch} from '@nestjs/common';
import { MaterialsService } from './materials.service';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';

@Controller('materials')
export class MaterialsController {
  constructor(private readonly materialsService: MaterialsService) {}

  @Get()
  findAll() {
    return this.materialsService.findAll();
  }

  @Post()
  create(@Body() createMaterialDto: CreateMaterialDto) {
    return this.materialsService.create(createMaterialDto);
  }

  @Get(':id')
findOne(@Param('id') id: string) {
  return this.materialsService.findOne(Number(id));
}

@Patch(':id')
update(
  @Param('id') id: string,
  @Body() updateMaterialDto: UpdateMaterialDto,
) {
  return this.materialsService.update(
    Number(id),
    updateMaterialDto,
  );
}

@Delete(':id')
remove(@Param('id') id: string) {
  return this.materialsService.remove(Number(id));
}
}