import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import * as financialController from "../controllers/financialEventController.js";

const financialEventRouter = Router();

financialEventRouter.post("/financial-events", authMiddleware, financialController.createFinancialEvent);
financialEventRouter.get("/financial-events",authMiddleware, financialController.getUserFinancialEvents);
financialEventRouter.get("/financial-events/sum", authMiddleware, financialController.financialEventsSum);

export default financialEventRouter;