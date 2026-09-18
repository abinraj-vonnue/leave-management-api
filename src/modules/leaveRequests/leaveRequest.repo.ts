import { prisma } from "../../../lib/prisma";

export class LeaveRequestRepo {
    async list() {
        return prisma.leaveRequest.findMany();
    }
}
