import { Type } from 'class-transformer';
import { IsInt, IsPositive } from 'class-validator';

export class FindCitiesDto {
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  departmentId: number;
}