import { Injectable } from '@nestjs/common';
import { CreateTaskStatusDto } from './dto/create-task_status.dto';
import { UpdateTaskStatusDto } from './dto/update-task_status.dto';
import { TaskStatus } from './entities/task_status.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TaskStatusService {
  constructor(
    @InjectRepository(TaskStatus)
    private taskstrepository: Repository<TaskStatus>,
  ) {}

  create(createTaskStatusDto: CreateTaskStatusDto) {
    return this.taskstrepository.save(createTaskStatusDto);
  }

  findAll() {
    return this.taskstrepository.find();
  }

  findOne(id: number) {
    return this.taskstrepository.findOneBy({id});
  }

  update(id: number, updateTaskstDto: UpdateTaskStatusDto) {
    return this.taskstrepository.update(id,updateTaskstDto);
  }

  remove(id: number) {
    return this.taskstrepository.delete(id);
  }
}
