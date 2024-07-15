import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ArchiveModuleBase } from "./base/archive.module.base";
import { ArchiveService } from "./archive.service";
import { ArchiveController } from "./archive.controller";
import { ArchiveResolver } from "./archive.resolver";

@Module({
  imports: [ArchiveModuleBase, forwardRef(() => AuthModule)],
  controllers: [ArchiveController],
  providers: [ArchiveService, ArchiveResolver],
  exports: [ArchiveService],
})
export class ArchiveModule {}
