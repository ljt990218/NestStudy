import { IsNotEmpty, IsString } from 'class-validator';

export class StudentDto {
  @IsNotEmpty()
  @IsString()
  id: number;
  name: string;
  age: number;
  updateDate: Date;
  createDate: Date;
}