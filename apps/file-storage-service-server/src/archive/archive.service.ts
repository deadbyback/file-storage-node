import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ArchiveServiceBase } from "./base/archive.service.base";

@Injectable()
export class ArchiveService extends ArchiveServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
