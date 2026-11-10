import { Router } from "express";
import { organizationController } from "../controllers/organizationController";

const router = Router();

router.get("/", organizationController.getAll);
router.post("/", organizationController.add);
router.delete("/", organizationController.remove);

export default router;

