import { z } from "zod";

export const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number().positive().int(),
  userId: z.number().positive().int(),
});

export const scheduleCreateNewSchema = scheduleSchema.omit({
  id: true,
  userId: true,
});
