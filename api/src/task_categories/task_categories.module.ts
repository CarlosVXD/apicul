import { Module } from '@nestjs/common';
import { TaskCategoriesService } from './task_categories.service';
import { TaskCategoriesController } from './task_categories.controller';
import { TaskCategory } from './entities/task_category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TaskCategory])],
  controllers: [TaskCategoriesController],
  providers: [TaskCategoriesService],
})
export class TaskCategoriesModule {}
