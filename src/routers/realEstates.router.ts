import { Router } from "express";
import {
  validateBody,
  verifyAdmin,
  verifyPermissions,
  verifyToken,
} from "../middlewares/globals.middleware";
import { VerifyAddressExists } from "../middlewares/realEstates.middleware";
import {
  createRealEstateController,
  readAllRealEstatesController,
} from "../controllers/realEstates.controller";
import { realEstateCreateSchema } from "../schemas/realEstates.schema";

export const realEstateRouter: Router = Router();
realEstateRouter.post(
  "/",
  verifyToken,
  verifyPermissions,
  verifyAdmin,
  validateBody(realEstateCreateSchema),
  VerifyAddressExists,
  createRealEstateController
);
realEstateRouter.get("/", readAllRealEstatesController);
