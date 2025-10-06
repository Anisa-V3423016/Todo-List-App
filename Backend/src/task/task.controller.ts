import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async createTask(
    @Body() data: { category: string; task: string; description: string },
  ) {
    return this.taskService.createTask(data);
  }

  @Get()
  async getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Get('categories')
  async getCategories() {
    return this.taskService.getCategories();
  }

  @Get('grouped')
  async getGroupedTasks() {
    return this.taskService.getTasksGroupedByCategory();
  }

  @Post('categories')
  addCategory(@Body('name') name: string) {
    return this.taskService.addCategory(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: { isDone?: boolean }) {
    return this.taskService.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(Number(id));
  }
}
