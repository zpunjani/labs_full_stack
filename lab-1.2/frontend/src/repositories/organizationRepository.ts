import type { Role } from '../types/organization'

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const endpoint = `${baseUrl}/api/organization`;

async function readJson<T>(response:Response): Promise<T> {
    if (!response.ok) {
        throw new Error(`API error:${response.status}`);
    }

    return (await response.json()) as T;
}

export const organizationRepository = {
    async getRoles(): Promise<Role[]> {
        const response = await fetch(endpoint);
        return readJson<Role[]>(response);
    },

    async addRole(newRole: Role): Promise<Role[]> {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRole)
        });
        return readJson<Role[]>(response);
    },

    async removeRole(roleToRemove: Role): Promise<Role[]> {
        const response = await fetch(endpoint, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(roleToRemove)
        });
        return readJson<Role[]>(response);
    }
}

