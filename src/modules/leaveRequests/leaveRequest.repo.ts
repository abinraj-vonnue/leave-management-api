import { LeaveRequestUncheckedCreateInput } from "../../../generated/prisma/models";
import { prisma } from "../../../lib/prisma";

export class LeaveRequestRepo {
    async list() {
        return prisma.leaveRequest.findMany();
    }
    async create(input: LeaveRequestUncheckedCreateInput) {
        return prisma.leaveRequest.create({ data: input });
    }
}
