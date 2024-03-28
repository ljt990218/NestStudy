import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, Generated } from 'typeorm';

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'int' })
  age: number;

  @UpdateDateColumn({ type: 'timestamp' })
  updateDate: Date;

  @CreateDateColumn({ type: 'timestamp' })
  createDate: Date;

  @Generated('uuid')
  uuid: string;
}