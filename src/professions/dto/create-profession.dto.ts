import { IsString, IsUrl } from "class-validator";

export class CreateProfessionDto {
  @IsString()
  name: string;

  @IsString()
  @IsUrl()
  icon: string;

  @IsString()
  about: string;

  @IsString()
  technicalData: string;
}
