import type { Request, Response } from 'express'
import { organizationService } from '../services/organizationService'
import type { Role } from '../types/organization'

export const organizationController = {
    async getAll(_req: Request, res: Response) {
        const roles = await organizationService.getRoles();
        res.json(roles);
    },

    async add(req: Request, res: Response) {
        const newRole = req.body as Role;
        const roles = await organizationService.addRole(newRole);
        res.status(201).json(roles);
    },

    async remove(req: Request, res: Response) {
        const roleToRemove = req.body as Role;
        const roles = await organizationService.removeRole(roleToRemove);
        res.json(roles);
    }
};