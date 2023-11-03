import { Router } from "express";
import {
  validateBody,
  verifyAdmin,
  verifyToken,
} from "../middlewares/globals.middleware";
import {
  verifyCategoryExists,
  verifyUniqueCategoryName,
} from "../middlewares/categories.middleware";
import { categoryCreateSchema } from "../schemas/categories.schema";
import {
  createCategoryController,
  readCategoriesController,
  readRealEstateByCategoryController,
} from "../controllers/categories.controller";

export const categorieRouter: Router = Router();

categorieRouter.post(
  "/",
  validateBody(categoryCreateSchema),
  verifyToken,
  verifyUniqueCategoryName,
  verifyAdmin,
  createCategoryController
);

categorieRouter.get("/", readCategoriesController);

categorieRouter.get(
  "/:id/realEstate",
  verifyCategoryExists,
  readRealEstateByCategoryController
);
