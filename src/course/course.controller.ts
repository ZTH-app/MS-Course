import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
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

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Course> {
    try {
      const entity: Course = await this.courseService.findById(id);
      return Promise.resolve(entity);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  @Post()
  async create(@Body() course: Course): Promise<Course> {
    try {
      await this.courseService.create(course);
      return Promise.resolve(course);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ deleted: string }> {
    try {
      await this.courseService.delete(id);
      return Promise.resolve({ deleted: id });
    } catch (error) {
      return Promise.reject(error);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() course: Course,
  ): Promise<Course> {
    try {
      await this.courseService.update(id, course);
      return Promise.resolve(this.courseService.findById(id));
    } catch (error) {
      return Promise.reject(error);
    }
  }

  @Put(':id')
  async replace(
    @Param('id') id: string,
    @Body() course: Course,
  ): Promise<Course> {
    try {
      await this.courseService.replace(id, course);
      return Promise.resolve(course);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
