import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskrepository: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    return this.taskrepository.save(createTaskDto);
  }

  findAll() {
    return this.taskrepository.find();
  }

  findOne(id: number) {
    return this.taskrepository.findOneBy({id});
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.taskrepository.update(id,updateTaskDto);
  }

  remove(id: number) {
    return this.taskrepository.delete(id);
  }
}
