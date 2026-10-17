import { Request, Response } from "express";
import { LeaveBalanceService } from "./leaveBalance.service";

const lbService = new LeaveBalanceService();

export class LeaveBalanceController {
    async getBalance(req: Request, res: Response) {
        const employeeId = Number(req.params.employeeId);

        const balances = await lbService.get(employeeId);
        return res.status(200).json({ data: balances });
    }
}

export const leaveBalanceController = new LeaveBalanceController();
