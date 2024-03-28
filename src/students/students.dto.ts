import { IsNotEmpty, IsString } from 'class-validator';

export class StudentDto {
  @IsNotEmpty()
  @IsString()
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}