import roleData from '../data/organization.json'
import type { Role } from '../types/organization'


let roles: Role[] = roleData as Role[]

export const organizationRepository = {
    async getRoles(): Promise<Role[]> {
        return roles.map((role) => ({
            ...role
        }));
    },

    async addRole(newRole: Role): Promise<Role[]> {
        roles = [...roles, {...newRole}];
        return this.getRoles();
    },
}
