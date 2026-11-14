import { prisma } from '../db/prisma'
import type { Role } from '../types/organization'

export const organizationRepository = {
    async getRoles(): Promise<Role[]> {
        const roles = await prisma.role.findMany();

        return roles.map((role) => ({
            firstName: role.firstName,
            lastName: role.lastName,
            role: role.role
        }));
    },

    async addRole(newRole: Role): Promise<Role[]> {
        await prisma.role.create({
            data: {
                firstName: newRole.firstName,
                lastName: newRole.lastName,
                role: newRole.role
            }
        });

        return this.getRoles();
    },

    async removeRole(roleToRemove: Role): Promise<Role[]> {
        await prisma.role.deleteMany({
            where: {
                role: roleToRemove.role
            }
        });

        return this.getRoles();
    }
}
