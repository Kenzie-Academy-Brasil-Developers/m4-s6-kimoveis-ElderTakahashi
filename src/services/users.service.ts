import { User } from "../entities";
import {
  UserCreate,
  UserReadReturn,
  UserReturn,
  UserUpdate,
} from "../interfaces/users.interface";
import { userRepo } from "../repositories";
import {
  userReturnListSchema,
  userReturnSchema,
} from "../schemas/users.schema";

export const createUserService = async (
  data: UserCreate
): Promise<UserReturn> => {
  const user: User = userRepo.create(data);

  await userRepo.save(user);

  return userReturnSchema.parse(user);
};

export const readAllUsersService = async (): Promise<UserReadReturn> => {
  const users: User[] = await userRepo.find();

  return userReturnListSchema.parse(users);
};

export const updateUserService = async (
  data: UserUpdate,
  user: User
): Promise<UserReturn> => {
  const userUpdated: User = userRepo.create({ ...user, ...data });

  await userRepo.save(userUpdated);

  return userReturnSchema.parse(userUpdated);
};

export const deleteUserService = async (user: User): Promise<void> => {
  await userRepo.softRemove(user);
};
