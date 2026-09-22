import { Injectable,  NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';

@Injectable()
export class MaterialsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.material.findMany();
  }

  async create(createMaterialDto: CreateMaterialDto) {
    return this.prisma.material.create({
      data: createMaterialDto,
    });
  }

async findOne(id: number) {
  const material = await this.prisma.material.findUnique({
    where: { id },
    include: {
      unit: true,
    },
  });

  if (!material) {
    throw new NotFoundException(
      `Material with id ${id} not found`,
    );
  }

  return material;
}

async update(
  id: number,
  updateMaterialDto: UpdateMaterialDto,
) {
  return this.prisma.material.update({
    where: { id },
    data: updateMaterialDto,
  });
}

async remove(id: number) {
  return this.prisma.material.delete({
    where: { id },
  });
}
}