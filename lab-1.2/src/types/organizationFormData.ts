import type { Role } from "../../src/types/organization"

export interface OrganizationFormData {
    onAddRole: (role: Role) => Promise<{
        success: boolean, 
        error: string | null
    }>;
}


