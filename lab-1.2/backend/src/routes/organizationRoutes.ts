import { Router } from "express";
import { organizationController } from "../controllers/organizationController";
import { validateOrganizationBody } from "../validations/organizationValidation";

const router = Router();

router.get("/", organizationController.getAll);
router.post("/", validateOrganizationBody, organizationController.add);
router.delete("/", validateOrganizationBody, organizationController.remove);

export default router;

