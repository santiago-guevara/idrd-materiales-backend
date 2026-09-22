import { IsInt, IsPositive } from 'class-validator';

export class AssignMaterialDto {
  @IsInt()
  @IsPositive()
  materialId: number;

  @IsPositive()
  quantity: number;
}