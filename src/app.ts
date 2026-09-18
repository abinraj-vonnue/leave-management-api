import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import { leaveRequestRouter } from "./modules/leaveRequests/leaveRequest.routes";

export const app = express();

app.use(express.json());
app.set("json spaces", 2);
app.use(morgan("dev"));

app.use(cors());

app.get("/api/health", (_req: Request, res: Response) => {
    res.status(200).json({
        message: "Leave Request API is running",
    });
});

app.use("/api/leave-requests", leaveRequestRouter);
