import { LeaveBalanceRepo } from "./leaveBalance.repo";

const lbRepo = new LeaveBalanceRepo();

export class LeaveBalanceService {
    async get(employeeId: number) {
        return await lbRepo.get(employeeId);
    }
}
