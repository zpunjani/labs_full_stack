import { Router } from "express";
import { employeeController } from "../controllers/employeeController";

const router = Router();

router.get("/", employeeController.getAll);
router.post("/", employeeController.add);   

export default router;