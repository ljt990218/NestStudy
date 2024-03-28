import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class StudentsService {
  private readonly logger = new Logger(StudentsService.name);

  ImStudent(name?: string) {
    this.logger.log(`Im student ${name}`);
    return `Im student ${name}`;
  }

  createStudent(student: string) {
    this.logger.log(`create student ${student}`)
    return `create student ${student}`;
  }

  getStudentName(id: number) {
    const ID_NAME_MAP = {
      1: 'James',
      2: 'Durant',
      3: 'Kobe',
      4: 'Buke',
    };
    this.logger.log(`get student name ${id}, ${ID_NAME_MAP[id] ?? 'not found'}`)
    return ID_NAME_MAP[id] ?? 'not found';
  }
}
