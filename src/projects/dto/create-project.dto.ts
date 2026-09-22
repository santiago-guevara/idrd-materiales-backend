import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsPositive()
  cityId: number;
}