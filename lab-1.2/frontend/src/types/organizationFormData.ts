import type { Role } from "./organization"

export interface OrganizationFormData {
    onAddRole: (role: Role) => Promise<{
        success: boolean, 
        error: string | null
    }>;
}


