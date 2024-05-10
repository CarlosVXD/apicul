import { Injectable } from '@nestjs/common';
import { CreateTaskCategoryDto } from './dto/create-task_category.dto';
import { UpdateTaskCategoryDto } from './dto/update-task_category.dto';
import { TaskCategory } from './entities/task_category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TaskCategoriesService {
  constructor(
    @InjectRepository(TaskCategory)
    private taskcatrepository: Repository<TaskCategory>,
  ) {}

  create(createTaskCategoryDto: CreateTaskCategoryDto) {
    return this.taskcatrepository.save(createTaskCategoryDto);
  }

  findAll() {
    return this.taskcatrepository.find();
  }

  findOne(id: number) {
    return this.taskcatrepository.findOneBy({id});
  }

  update(id: number, updateTaskcatDto: UpdateTaskCategoryDto) {
    return this.taskcatrepository.update(id,updateTaskcatDto);
  }

  remove(id: number) {
    return this.taskcatrepository.delete(id);
  }
}
