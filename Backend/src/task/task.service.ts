import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async getCategories() {
    return this.prisma.category.findMany();
  }

  async addCategory(name: string) {
    return this.prisma.category.create({
      data: { name },
    });
  }

  // create
 async createTask(data: any) {
  return this.prisma.task.create({
    data: {
      task: data.task,
      category: { connect: { id: data.categoryId } }
    }
  });
}


  // get
async getAllTasks() {
  return this.prisma.task.findMany({
    include: { category: true }, 
  })
}

  // update
  async update(id: number, data: { isDone?: boolean }) {
    return this.prisma.task.update({
      where: { id },
      data,
    });
  }

  //delete
  async remove(id: number) {
    return this.prisma.task.delete({
      where: { id },
    });
  }

  async getTasksGroupedByCategory() {
    const categories = await this.prisma.category.findMany({
      include: {
        tasks: {
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    return categories.map((category) => ({
      category: category.name,
      tasks: category.tasks,
    }));
  }
}
