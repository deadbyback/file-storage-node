import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SubscriptionPlanResolverBase } from "./base/subscriptionPlan.resolver.base";
import { SubscriptionPlan } from "./base/SubscriptionPlan";
import { SubscriptionPlanService } from "./subscriptionPlan.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SubscriptionPlan)
export class SubscriptionPlanResolver extends SubscriptionPlanResolverBase {
  constructor(
    protected readonly service: SubscriptionPlanService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
