import { useEffect, useState } from 'react';
import { organizationService } from '../services/organizationService';
import type { Role } from '../types/organization';
import type { AddRoleFunction } from '../types/addRole';

export function useOrganization() {
    const [roles, setRoles] = useState<Role[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let ignore = false;     

        async function loadRoles() {
            try {
                const roles = await organizationService.getRoles();
                if (!ignore) {
                    setRoles(roles);
                }
            } catch {
                if (!ignore) {
                    setError('Failed to load organizations');
                }
            } finally {
                if (!ignore) {
                    setLoading(false);
                }
            }
        }

        loadRoles();

        return () => {
            ignore = true;
        };
    }, []);

    async function addRole(
        newRole: Role
    ): Promise<AddRoleFunction> {
        setError(null);
        try {
            const updatedRoles = await organizationService.addRole(newRole);
            setRoles(updatedRoles);
            return { success: true, error: null };
        } catch (error) {
            const message =
                error instanceof Error 
                ? error.message 
                : 'Failed to add organization';
            
            return { success: false, error: message };
        }
    }

    async function removeRole(
        roleToRemove: Role
    ): Promise<void> {  
        setError(null);

        try {
            const updatedRoles = await organizationService.removeRole(roleToRemove);
            setRoles(updatedRoles);
        } catch (error) {
            const message =
                error instanceof Error 
                ? error.message 
                : 'Failed to remove organization';
            setError(message);
        }
    }

    return { 
        roles,
        loading,
        error,
        addRole,
        removeRole
    };
}

