import z, { string } from "zod";
import { LeaveStatus, LeaveType } from "../../../generated/prisma/enums";

export const LeaveRequestCreateSchema = z.object({
    type: z.nativeEnum(LeaveType),
    startDate: string(),
    endDate: string(),
    reason: string().min(3).max(100),
    attachment: string().optional(),
});

export type LeaveRequestCreateInput = z.infer<typeof LeaveRequestCreateSchema>;
