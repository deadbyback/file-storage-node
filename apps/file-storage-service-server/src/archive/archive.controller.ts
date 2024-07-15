import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ArchiveService } from "./archive.service";
import { ArchiveControllerBase } from "./base/archive.controller.base";

@swagger.ApiTags("archives")
@common.Controller("archives")
export class ArchiveController extends ArchiveControllerBase {
  constructor(
    protected readonly service: ArchiveService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
