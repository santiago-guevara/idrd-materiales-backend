import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UnitsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.unit.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }
}