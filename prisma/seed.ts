import {
    EmployeeCreateInput,
    LeaveRequestUncheckedCreateInput,
} from "../generated/prisma/models";
import { prisma } from "../lib/prisma";
export const employeeInput: EmployeeCreateInput = {
    email: "employee@mail.com",
    name: "employee",
};

async function main() {
    await reset();

    const employee = await prisma.employee.create({ data: employeeInput });
    const leaveRequestsInput: LeaveRequestUncheckedCreateInput[] = [
        {
            type: "annual",
            startDate: new Date("2026-08-03"),
            endDate: new Date("2026-08-07"),
            duration: 5,
            reason: "Family vacation",
            submittedDate: new Date("2026-07-20"),
            status: "approved",
            employeeId: employee.id,
        },
        {
            type: "sick",
            startDate: new Date("2026-07-27"),
            endDate: new Date("2026-07-28"),
            duration: 2,
            reason: "Medical appointment and recovery",
            submittedDate: new Date("2026-07-26"),
            status: "approved",
            employeeId: employee.id,
        },
        {
            type: "casual",
            startDate: new Date("2026-07-20"),
            endDate: new Date("2026-07-20"),
            duration: 1,
            reason: "Personal work",
            submittedDate: new Date("2026-07-15"),
            status: "pending",
            employeeId: employee.id,
        },
        {
            type: "annual",
            startDate: new Date("2026-06-15"),
            endDate: new Date("2026-06-17"),
            duration: 3,
            reason: "Personal travel",
            submittedDate: new Date("2026-06-02"),
            status: "rejected",
            employeeId: employee.id,
        },
        {
            type: "sick",
            startDate: new Date("2026-05-11"),
            endDate: new Date("2026-05-12"),
            duration: 2,
            reason: "Health recovery",
            submittedDate: new Date("2026-05-10"),
            status: "approved",
            employeeId: employee.id,
        },
        {
            type: "casual",
            startDate: new Date("2026-04-24"),
            endDate: new Date("2026-04-24"),
            duration: 1,
            reason: "Personal commitment",
            submittedDate: new Date("2026-04-18"),
            status: "cancelled",
            employeeId: employee.id,
        },
        {
            type: "annual",
            startDate: new Date("2026-03-16"),
            endDate: new Date("2026-03-20"),
            duration: 5,
            reason: "Family trip",
            submittedDate: new Date("2026-03-01"),
            status: "approved",
            employeeId: employee.id,
        },
        {
            type: "other",
            startDate: new Date("2026-02-09"),
            endDate: new Date("2026-02-10"),
            duration: 2,
            reason: "Personal emergency",
            submittedDate: new Date("2026-02-08"),
            status: "pending",
            employeeId: employee.id,
        },
    ];

    const leaveRequests = await prisma.leaveRequest.createManyAndReturn({
        data: leaveRequestsInput,
    });

    console.log("seed successful");
    console.log(leaveRequests[0]);
}

async function reset() {
    await prisma.leaveRequest.deleteMany();
    await prisma.employee.deleteMany();
}

main()
    .catch((e) => {
        console.error("error unable to seed : ", e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
