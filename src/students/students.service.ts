import { Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/students.entity';
import { StudentDto } from './students.dto';

@Injectable()
export class StudentsService {
  private readonly logger = new Logger(StudentsService.name);

  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) { }

  addStudent(student: any) {
    const data = new StudentDto();
    data.name = student.name;
    data.age = student.age;
    data.createDate = new Date();
    data.updateDate = new Date();
    return this.studentRepository.save(data);
  }

  delStudent(id: number) {
    this.logger.log(`delete student ${id}`)
    return this.studentRepository.delete(id);
  }

  updataStudent(student: any) {
    let id = student.id;
    return this.studentRepository.update(id, student);
  }

  async getStudentById(id: any) {
    let data = await this.studentRepository.findOne({
      where: {
        id: id
      }
    })
    return {
      code: 200,
      message: 'success',
      data: data
    };
  }
}
