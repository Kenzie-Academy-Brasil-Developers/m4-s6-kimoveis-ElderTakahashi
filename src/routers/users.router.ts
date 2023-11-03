import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  readAllUsersController,
  updateUserController,
} from "../controllers/users.controller";
import {
  validateBody,
  verifyAdmin,
  verifyPermissions,
  verifyToken,
} from "../middlewares/globals.middleware";
import { userCreateSchema, userUpdateSchema } from "../schemas/users.schema";
import {
  verifyUniqueUserEmail,
  verifyUserExists,
} from "../middlewares/users.middleware";

export const userRouter: Router = Router();

userRouter.post(
  "/",
  validateBody(userCreateSchema),
  verifyUniqueUserEmail,
  createUserController
);

userRouter.get("/", verifyToken, verifyAdmin, readAllUsersController);

userRouter.patch(
  "/:id",
  validateBody(userUpdateSchema),
  verifyToken,
  verifyUserExists,
  verifyPermissions,
  updateUserController
);

userRouter.delete(
  "/:id",
  verifyToken,
  verifyUserExists,
  verifyPermissions,
  deleteUserController
);
