import { Router } from "express";
import { leaveBalanceController } from "./leaveBalance.controller";

export const LeaveBalanceRouter = Router();

LeaveBalanceRouter.get("/:employeeId", (req, res, next) => {
    leaveBalanceController.getBalance(req, res).catch(next);
});
