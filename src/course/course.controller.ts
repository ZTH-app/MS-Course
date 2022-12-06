import { Controller, Get } from '@nestjs/common';
import { Course } from './course.schema';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
  @Get()
  async findAll(): Promise<Course[]> {
    try {
      const entities: Course[] = await this.courseService.findAll();
      return Promise.resolve(entities);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
