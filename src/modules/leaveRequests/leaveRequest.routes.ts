import { Router } from "express";
import { leaveRequestController } from "./leaveRequest.controller";

export const leaveRequestRouter = Router();

leaveRequestRouter.get("/", (req, res, next) => {
    leaveRequestController.listRequest(req, res).catch(next);
});

leaveRequestRouter.post("/:employeeId", (req, res, next) => {
    leaveRequestController.createRequest(req, res).catch(next);
});
