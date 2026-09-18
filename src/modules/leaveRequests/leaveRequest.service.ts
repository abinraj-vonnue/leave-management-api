import { LeaveRequestRepo } from "./leaveRequest.repo";

const lrRepo = new LeaveRequestRepo();
export class LeaveRequestService {
    async list() {
        const result = await lrRepo.list();
        return result;
    }
}
