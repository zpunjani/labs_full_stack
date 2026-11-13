
import "dotenv/config";

import { readFileSync } from "node:fs";
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// Types for our original JSON data.
type SeedEmployee = {
  firstName: string;
  lastName: string;
};

type SeedDepartment = {
  name: string;
  employees: SeedEmployee[];
};

type SeedRole = {
  firstName: string;
  lastName: string;
  role: string;
};

// Load JSON files relative to this seed script.
function readJson<T>(filename: string): T {
  const path = new URL(`../src/data/${filename}`, import.meta.url);
  return JSON.parse(readFileSync(path, "utf8")) as T;
}

const departments =
  readJson<SeedDepartment[]>("employee-department.json");

const roles = readJson<SeedRole[]>("organization.json");

// Use the same Prisma connection setup as our backend.
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!
});

const prisma = new PrismaClient({ adapter });

async function main() {
  // Perform the whole seed inside one transaction.
  await prisma.$transaction(async (tx) => {

    // 1. Clear existing development seed data.
    // Delete employees before departments because of the foreign key.
    await tx.employee.deleteMany();
    await tx.department.deleteMany();
    await tx.role.deleteMany();

    // 2. Import departments and their employees.
    for (const department of departments) {
      await tx.department.create({
        data: {
          name: department.name,
          employees: {
            create: department.employees.map((employee) => ({
              firstName: employee.firstName,
              lastName: employee.lastName
            }))
          }
        }
      });
    }

    // 3. Import organization roles.
    for (const role of roles) {
      await tx.role.create({
        data: {
          firstName: role.firstName,
          lastName: role.lastName,
          role: role.role
        }
      });
    }
  });

  const employeeCount = departments.reduce(
    (total, department) => total + department.employees.length,
    0
  );

  console.log(
    `Seeded ${departments.length} departments, ` +
    `${employeeCount} employees, and ` +
    `${roles.length} roles.`
  );
}

main()
  .catch((error) => {
    console.error("Seeding failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
