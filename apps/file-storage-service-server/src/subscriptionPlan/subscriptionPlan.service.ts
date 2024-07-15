import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubscriptionPlanServiceBase } from "./base/subscriptionPlan.service.base";

@Injectable()
export class SubscriptionPlanService extends SubscriptionPlanServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
