import { StudentDetail } from 'src/students/entities/studentDetail.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderMoney: string;

  @Column()
  price: number;

  @OneToMany(() => StudentDetail, studentDetail => studentDetail.order)
  studentDetail: StudentDetail
}
