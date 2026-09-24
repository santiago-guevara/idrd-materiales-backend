import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.unit.createMany({
    data: [
      { name: 'M²' },
      { name: 'Unidad' },
      { name: 'Kg' },
      { name: 'M³' },
      { name: 'Litro' },
    ],
    skipDuplicates: true,
  });

  const bogota = await prisma.department.upsert({
    where: { name: 'Bogotá D.C.' },
    update: {},
    create: { name: 'Bogotá D.C.' },
  });

  const antioquia = await prisma.department.upsert({
    where: { name: 'Antioquia' },
    update: {},
    create: { name: 'Antioquia' },
  });

  const cundinamarca = await prisma.department.upsert({
    where: { name: 'Cundinamarca' },
    update: {},
    create: { name: 'Cundinamarca' },
  });

  const valle = await prisma.department.upsert({
    where: { name: 'Valle del Cauca' },
    update: {},
    create: { name: 'Valle del Cauca' },
  });

  await prisma.city.createMany({
    data: [
      {
        name: 'Bogotá',
        departmentId: bogota.id,
      },
      {
        name: 'Medellín',
        departmentId: antioquia.id,
      },
      {
        name: 'Bello',
        departmentId: antioquia.id,
      },
      {
        name: 'Envigado',
        departmentId: antioquia.id,
      },
      {
        name: 'Itagüí',
        departmentId: antioquia.id,
      },
      {
        name: 'Soacha',
        departmentId: cundinamarca.id,
      },
      {
        name: 'Cali',
        departmentId: valle.id,
      },
      {
        name: 'Palmira',
        departmentId: valle.id,
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });