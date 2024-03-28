import { Controller, Inject, Get, Post, Query, Body, Request, Param, Headers } from '@nestjs/common';
import { StudentDto } from './students.dto';
import { StudentsService } from './students.service';
import { ClassesService } from '../classes/classes.service';

@Controller('students')
export class StudentsController {
  constructor(
    @Inject('students') private studentService: StudentsService,
    @Inject('studentsList') private studentsList: string[],
    @Inject('Config') private teacher: string,
    private classesService: ClassesService
  ) { }

  @Post('/addStudent')
  addStudent(@Body() body): any {
    return this.studentService.addStudent(body);
  }

  @Get('/deleteStudent/:id')
  delStudent(@Param() params: any) {
    let id: number = parseInt(params.id);
    return this.studentService.delStudent(id);
  }

  @Post('/updataStudent')
  updataStudent(@Body() body) {
    return this.studentService.updataStudent(body);
  }

  @Get('/getStudent')
  getStudent(@Query() query: any) {
    return this.studentService.getStudentById(query.id);
  }

  @Get('/getStudentsList')
  getStudentsList() {
    return this.studentsList;
  }

  @Get('/corstest')
  corsTest(): object {
    return { message: 'cors test' };
  }

  @Get('/findAll')
  findAll() {
    return this.classesService.findAll();
  }

  @Get('/teacher')
  getTeacher() {
    return this.teacher;
  }
}
