import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.unit.createMany({
    data: [
      { name: 'M²' },
      { name: 'Unidad' },
      { name: 'Kg' },
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