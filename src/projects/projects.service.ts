import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { AssignMaterialDto } from './dto/assign-material.dto';


@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProjectDto: CreateProjectDto) {
    return this.prisma.project.create({
      data: createProjectDto,
    });
  }

  async findAll() {
  return this.prisma.project.findMany({
    include: {
      city: {
        include: {
          department: true,
        },
      },
    },
    orderBy: {
      name: 'asc',
    },
  });
}

async findOne(id: number) {
  const project = await this.prisma.project.findUnique({
    where: { id },
    include: {
      city: {
        include: {
          department: true,
        },
      },
    },
  });

  if (!project) {
    throw new NotFoundException(
      `Project with id ${id} not found`,
    );
  }

  return project;
}

async update(id: number, updateProjectDto: UpdateProjectDto) {
  return this.prisma.project.update({
    where: { id },
    data: updateProjectDto,
  });
}

async remove(id: number) {
  return this.prisma.project.delete({
    where: { id },
  });
}

async assignMaterial(
  projectId: number,
  assignMaterialDto: AssignMaterialDto,
) {
  return this.prisma.projectMaterial.create({
    data: {
      projectId,
      materialId: assignMaterialDto.materialId,
      quantity: assignMaterialDto.quantity,
    },
  });
}

async findMaterials(projectId: number) {
  return this.prisma.projectMaterial.findMany({
    where: {
      projectId,
    },
    include: {
      material: {
        include: {
          unit: true,
        },
      },
    },
  });
}

async getReport(projectId: number) {
  const project = await this.prisma.project.findUnique({
    where: { id: projectId },
    include: {
      city: {
        include: {
          department: true,
        },
      },
      materials: {
        include: {
          material: {
            include: {
              unit: true,
            },
          },
        },
      },
    },
  });

  if (!project) {
    return null;
  }

  const materials = project.materials.map((item) => ({
    code: item.material.code,
    description: item.material.description,
    unit: item.material.unit.name,
    quantity: item.quantity,
    price: item.material.price,
    total: Number(item.quantity) * Number(item.material.price),
  }));

  const totalCost = materials.reduce(
    (sum, item) => sum + item.total,
    0,
  );

  return {
    project: {
      id: project.id,
      name: project.name,
      city: project.city.name,
      department: project.city.department.name,
    },
    materials,
    totalCost,
  };
}
}