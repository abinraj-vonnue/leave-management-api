import { LeaveType } from "../../../generated/prisma/enums";
import { prisma } from "../../../lib/prisma";

const leaveMax: Record<LeaveType, number> = {
    annual: 20,
    sick: 10,
    casual: 12,
    other: 5,
};
export class LeaveBalanceRepo {
    async get(employeeId: number) {
        const leaveRequest = await prisma.leaveRequest.findMany({
            where: { employeeId },
            select: {
                type: true,
                duration: true,
            },
        });

        return (Object.keys(leaveMax) as LeaveType[]).map((type) => {
            const used = leaveRequest
                .filter((request) => request.type === type)
                .reduce((total, request) => total + request.duration, 0);

            const total = leaveMax[type];

            return {
                type,
                used,
                total,
                remaining: total - used,
            };
        });
    }
}
