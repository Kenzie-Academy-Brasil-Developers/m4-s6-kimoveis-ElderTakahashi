import { Router } from "express";
import {
  validateBody,
  verifyAdmin,
  verifyToken,
} from "../middlewares/globals.middleware";
import {
  verifyRealEstateExists,
  verifyRealEstateScheduleExists,
  verifyUserScheduleExists,
} from "../middlewares/schedules.middleware";
import {
  createScheduleController,
  readAllRealEstateScheduleController,
} from "../controllers/schedules.controller";
import { scheduleCreateNewSchema } from "../schemas/schedules.schema";

export const scheduleRouter: Router = Router();
scheduleRouter.post(
  "/",
  verifyToken,
  validateBody(scheduleCreateNewSchema),
  verifyRealEstateExists,
  verifyRealEstateScheduleExists,
  verifyUserScheduleExists,
  createScheduleController
);

scheduleRouter.get(
  "/realEstate/:id",
  verifyToken,
  verifyAdmin,
  readAllRealEstateScheduleController
);
