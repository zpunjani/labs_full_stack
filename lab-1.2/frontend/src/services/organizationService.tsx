import { organizationRepository } from "../repositories/organizationRepository";
import type { Role } from "../types/organization";

function validateRole(
    newRole: Role,    
    roles: Role[]
): void {
    const errors: string[] = [];

    if (newRole.firstName.trim().length < 3) {
        errors.push("First name must be at least 3 characters long");
    }

    const roleOccupied = roles.some(
        (role) => 
            role.role.trim().toLowerCase() === newRole.role.trim().toLowerCase()
    );

    if (roleOccupied) {
        errors.push("Role is already occupied");
    }

    if (errors.length > 0) {
        throw new Error(errors.join(", "));
    }

    if (newRole.role.trim().length === 0) {
        errors.push("Role cannot be empty");
    }

    if (errors.length > 0) {
        throw new Error(errors.join(", "));
    }
}

export const organizationService = {
    async getRoles(): Promise<Role[]> {
        return await organizationRepository.getRoles();
    },

    async addRole(newRole: Role): Promise<Role[]> {
        const roles = await organizationRepository.getRoles();
        validateRole(newRole, roles);
        return organizationRepository.addRole(newRole);
    },

    async removeRole(roleToRemove: Role): Promise<Role[]> {
        return organizationRepository.removeRole(roleToRemove);
    }
};
