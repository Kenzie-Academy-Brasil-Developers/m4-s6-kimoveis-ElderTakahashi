import { z } from "zod";
import { realEstateCreateSchema } from "../schemas/realEstates.schema";
import { Repository } from "typeorm";
import { Address, RealEstate } from "../entities";

export type CreateRealEstate = z.infer<typeof realEstateCreateSchema>;

export type RealEstateRepo = Repository<RealEstate>;

export type AddressRepo = Repository<Address>;
