import { Request, Response } from "express";
import { LeaveRequestService } from "./leaveRequest.service";
import { LeaveRequestCreateSchema } from "./leaveRequest.schema";

const lrService = new LeaveRequestService();
export class LeaveRequestController {
    async listRequest(_req: Request, res: Response) {
        const leaveRequests = await lrService.list();

        return res.status(200).json({ data: leaveRequests });
    }
    async createRequest(req: Request, res: Response) {
        const { employeeId } = req.params;
        const input = LeaveRequestCreateSchema.parse(req.body);
        const leaveRequest = await lrService.create(Number(employeeId), input);

        console.log(leaveRequest);
        return res.status(201).json({ data: leaveRequest });
    }
}

export const leaveRequestController = new LeaveRequestController();
