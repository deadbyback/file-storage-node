import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SubscriptionPlanModuleBase } from "./base/subscriptionPlan.module.base";
import { SubscriptionPlanService } from "./subscriptionPlan.service";
import { SubscriptionPlanController } from "./subscriptionPlan.controller";
import { SubscriptionPlanResolver } from "./subscriptionPlan.resolver";

@Module({
  imports: [SubscriptionPlanModuleBase, forwardRef(() => AuthModule)],
  controllers: [SubscriptionPlanController],
  providers: [SubscriptionPlanService, SubscriptionPlanResolver],
  exports: [SubscriptionPlanService],
})
export class SubscriptionPlanModule {}
