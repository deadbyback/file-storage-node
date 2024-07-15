/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Archive } from "./Archive";
import { ArchiveCountArgs } from "./ArchiveCountArgs";
import { ArchiveFindManyArgs } from "./ArchiveFindManyArgs";
import { ArchiveFindUniqueArgs } from "./ArchiveFindUniqueArgs";
import { CreateArchiveArgs } from "./CreateArchiveArgs";
import { UpdateArchiveArgs } from "./UpdateArchiveArgs";
import { DeleteArchiveArgs } from "./DeleteArchiveArgs";
import { FileFindManyArgs } from "../../file/base/FileFindManyArgs";
import { File } from "../../file/base/File";
import { Account } from "../../account/base/Account";
import { ArchiveService } from "../archive.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Archive)
export class ArchiveResolverBase {
  constructor(
    protected readonly service: ArchiveService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Archive",
    action: "read",
    possession: "any",
  })
  async _archivesMeta(
    @graphql.Args() args: ArchiveCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Archive])
  @nestAccessControl.UseRoles({
    resource: "Archive",
    action: "read",
    possession: "any",
  })
  async archives(
    @graphql.Args() args: ArchiveFindManyArgs
  ): Promise<Archive[]> {
    return this.service.archives(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Archive, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Archive",
    action: "read",
    possession: "own",
  })
  async archive(
    @graphql.Args() args: ArchiveFindUniqueArgs
  ): Promise<Archive | null> {
    const result = await this.service.archive(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Archive)
  @nestAccessControl.UseRoles({
    resource: "Archive",
    action: "create",
    possession: "any",
  })
  async createArchive(
    @graphql.Args() args: CreateArchiveArgs
  ): Promise<Archive> {
    return await this.service.createArchive({
      ...args,
      data: {
        ...args.data,

        account: args.data.account
          ? {
              connect: args.data.account,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Archive)
  @nestAccessControl.UseRoles({
    resource: "Archive",
    action: "update",
    possession: "any",
  })
  async updateArchive(
    @graphql.Args() args: UpdateArchiveArgs
  ): Promise<Archive | null> {
    try {
      return await this.service.updateArchive({
        ...args,
        data: {
          ...args.data,

          account: args.data.account
            ? {
                connect: args.data.account,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Archive)
  @nestAccessControl.UseRoles({
    resource: "Archive",
    action: "delete",
    possession: "any",
  })
  async deleteArchive(
    @graphql.Args() args: DeleteArchiveArgs
  ): Promise<Archive | null> {
    try {
      return await this.service.deleteArchive(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [File], { name: "files" })
  @nestAccessControl.UseRoles({
    resource: "File",
    action: "read",
    possession: "any",
  })
  async findFiles(
    @graphql.Parent() parent: Archive,
    @graphql.Args() args: FileFindManyArgs
  ): Promise<File[]> {
    const results = await this.service.findFiles(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Account, {
    nullable: true,
    name: "account",
  })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async getAccount(@graphql.Parent() parent: Archive): Promise<Account | null> {
    const result = await this.service.getAccount(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
