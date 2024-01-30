import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const adminRole = await prisma.roles.upsert({
    where: { name: "admin" },
    update: {
      name: "admin",
      createAt: new Date(),
      updateAt: new Date(),
    },
    create: {
      name: "admin",
      createAt: new Date(),
      updateAt: new Date(),
    },
  });
  const jossue = await prisma.users.upsert({
    where: { email: "jossue.henriquez@ues.edu.sv" },
    update: {
      email: "jossue.henriquez@ues.edu.sv",
      firstName: "Jossue Humberto",
      lastName: "Henriquez Garcia",
      password:
        "3sItehYEaZSMY125xFJ51TYX0AkWc77bPMDdxQpCb/NlPFpmyuqFdteTt11ObWLvegHie6RliOXGx28EQNQaQthAXbgYA+s722yZ3jpxyA1nEYcLNI9p96p15KsTxvTXSCIEMR57N9eLoIWQqkG22+ox4luwrFNEoDY2J8GAcQE=",
      salt: "9EjHqGZqKi36P0KmYraWzylgRbt69Oudi3BRZscSvuCvuB2A+b2xBbzBDp7vpzZRKd/7Cawhg9JDBEqKdQOz8tiZAweggO+HlwpHGNClSJavpftZl8d7XZAKky540pWv5ClEk99FpRlYGR6Nk7FcnoHtkGrR4mX6d6uWO0gFGqM=",
      roleId: adminRole.id,
      createAt: new Date(),
      updateAt: new Date(),
    },
    create: {
      email: "jossue.henriquez@ues.edu.sv",
      firstName: "Jossue Humberto",
      lastName: "Henriquez Garcia",
      password:
        "3sItehYEaZSMY125xFJ51TYX0AkWc77bPMDdxQpCb/NlPFpmyuqFdteTt11ObWLvegHie6RliOXGx28EQNQaQthAXbgYA+s722yZ3jpxyA1nEYcLNI9p96p15KsTxvTXSCIEMR57N9eLoIWQqkG22+ox4luwrFNEoDY2J8GAcQE=",
      salt: "9EjHqGZqKi36P0KmYraWzylgRbt69Oudi3BRZscSvuCvuB2A+b2xBbzBDp7vpzZRKd/7Cawhg9JDBEqKdQOz8tiZAweggO+HlwpHGNClSJavpftZl8d7XZAKky540pWv5ClEk99FpRlYGR6Nk7FcnoHtkGrR4mX6d6uWO0gFGqM=",
      roleId: adminRole.id,
      createAt: new Date(),
      updateAt: new Date(),
    },
  });

  console.log({ adminRole, jossue });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
