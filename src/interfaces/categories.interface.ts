import { z } from "zod";
import {
  categoryCreateSchema,
  realAllCategoriesSchema,
} from "../schemas/categories.schema";
import { Repository } from "typeorm";
import { Category } from "../entities";

export type CreateCategory = z.infer<typeof categoryCreateSchema>;

export type ReadAllCategories = z.infer<typeof realAllCategoriesSchema>;

export type CategoryRepo = Repository<Category>;
