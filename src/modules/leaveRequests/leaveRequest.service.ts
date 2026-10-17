import { LeaveRequestRepo } from "./leaveRequest.repo";
import { LeaveRequestCreateInput } from "./leaveRequest.schema";

const lrRepo = new LeaveRequestRepo();
export class LeaveRequestService {
    async list() {
        const result = await lrRepo.list();
        return result;
    }
    async create(employeeId: number, input: LeaveRequestCreateInput) {
        const startDate = new Date(input.startDate);
        const endDate = new Date(input.endDate);
        const MS_PER_DAY = 1000 * 60 * 60 * 24;
        const duration =
            Math.ceil((endDate.getTime() - startDate.getTime()) / MS_PER_DAY) +
            1;
        return await lrRepo.create({
            ...input,
            startDate,
            endDate,
            employeeId,
            duration,
        });
    }
}
