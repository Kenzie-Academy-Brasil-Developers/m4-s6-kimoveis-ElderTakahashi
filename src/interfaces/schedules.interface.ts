import { z } from "zod";
import { scheduleCreateNewSchema } from "../schemas/schedules.schema";
import { Repository } from "typeorm";
import { Schedule } from "../entities";

export type CreateSchedule = z.infer<typeof scheduleCreateNewSchema>;

export type ScheduleRepo = Repository<Schedule>;
