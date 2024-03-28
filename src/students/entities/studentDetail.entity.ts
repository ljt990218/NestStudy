import { Entity, OneToOne, OneToMany, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, Generated, JoinColumn } from 'typeorm';
import { Student } from './students.entity';
import { Order } from '../../order/entities/order.entity';

@Entity()
export class StudentDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'varchar', length: 255 })
  gender: string;

  @Column({ type: 'varchar', length: 255 })
  address: string;

  @Column({ type: 'int' })
  phone: string;

  @UpdateDateColumn({ type: 'timestamp' })
  updateDate: Date;

  @CreateDateColumn({ type: 'timestamp' })
  createDate: Date;

  @Generated('uuid')
  uuid: string;

  @OneToOne(() => Student)
  @JoinColumn({ name: 'studentId' })
  student: Student;

  @OneToMany(() => Order, (order) => order.id)
  @JoinColumn()
  order: Order[];
}