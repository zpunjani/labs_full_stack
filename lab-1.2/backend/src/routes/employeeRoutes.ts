import { Router } from "express";
import { employeeController } from "../controllers/employeeController";
import { validateOrganizationBody } from "../validations/organizationValidation";

const router = Router();

router.get("/", employeeController.getAll);
router.post("/", validateOrganizationBody, employeeController.add);   

export default router;