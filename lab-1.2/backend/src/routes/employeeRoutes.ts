import { Router } from "express";
import { employeeController } from "../controllers/employeeController";
import { validateEmployee } from "../validations/employeeValidation";

const router = Router();

router.get("/", employeeController.getAll);
router.post("/", validateEmployee, employeeController.add);   

export default router;