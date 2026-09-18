import { Request, Response } from "express";
import { LeaveRequestService } from "./leaveRequest.service";

const lrService = new LeaveRequestService();
export class LeaveRequestController {
    async listRequest(_req: Request, res: Response) {
        const leaveRequests = await lrService.list();
        res.status(200).json({ data: leaveRequests });
    }
}

export const leaveRequestController = new LeaveRequestController();
