import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { StudentDto } from './students.dto';
import { StudentsService } from './students.service';
import { User } from '../common/decorators';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentService: StudentsService) { }

  @Get('whoAreYou')
  whoAreYou(@Query('name') name: string) {
    return this.studentService.ImStudent(name);
  }

  @Post('create')
  createStudent(@Body() student: StudentDto) {
    return this.studentService.createStudent(student.name);
  }

  @Get('getNameByID')
  getNameByID(@Query('id') id: number) {
    return this.studentService.getStudentName(id);
  }

  @Post('whoIsReq')
  whoIsReq(@User() user) {
    return user;
  }
}
