import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CitiesService {
  constructor(private readonly prisma: PrismaService) {}

  async findByDepartment(departmentId: number) {
    return this.prisma.city.findMany({
      where: {
        departmentId,
      },
      orderBy: {
        name: 'asc',
      },
    });
  }
}