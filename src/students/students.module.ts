import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/students.entity';
import { StudentDetail } from './entities/studentDetail.entity';
import { CounterMiddleware } from '../counter/counter.middleware';
import { ClassesService } from '../classes/classes.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student]),
    TypeOrmModule.forFeature([StudentDetail])
  ],
  controllers: [StudentsController],
  providers: [ClassesService, {
    provide: 'students',
    useClass: StudentsService,
  }, {
      provide: 'studentsList',
      useValue: ['1', '2', '3'],
    }],
})
export class StudentsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CounterMiddleware)
      .forRoutes('students');
  }
} { }
