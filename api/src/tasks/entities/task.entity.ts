import { Entity, Column, PrimaryGeneratedColumn, TableForeignKey } from 'typeorm';

@Entity()
export class Task{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  Description: string;
  @Column()
  Color: string;
}