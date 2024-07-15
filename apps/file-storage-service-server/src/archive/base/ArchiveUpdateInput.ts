/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
import { Type } from "class-transformer";
import { FileUpdateManyWithoutArchivesInput } from "./FileUpdateManyWithoutArchivesInput";

@InputType()
class ArchiveUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => AccountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccountWhereUniqueInput)
  @IsOptional()
  @Field(() => AccountWhereUniqueInput, {
    nullable: true,
  })
  account?: AccountWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => FileUpdateManyWithoutArchivesInput,
  })
  @ValidateNested()
  @Type(() => FileUpdateManyWithoutArchivesInput)
  @IsOptional()
  @Field(() => FileUpdateManyWithoutArchivesInput, {
    nullable: true,
  })
  files?: FileUpdateManyWithoutArchivesInput;
}

export { ArchiveUpdateInput as ArchiveUpdateInput };
