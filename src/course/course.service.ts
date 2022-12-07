import { CourseRepository } from './course.repository';
import { Controller } from '@nestjs/common';
import { Course } from './course.schema';

@Controller()
export class CourseService {
  constructor(private courseRepository: CourseRepository) {}

  async create(course: Course) {
    return await this.courseRepository.create(course);
  }

  async findAll(): Promise<Course[]> {
    return await this.courseRepository.findAll();
  }

  async findById(id: string): Promise<Course> {
    return await this.courseRepository.findById(id);
  }

  async delete(id: string): Promise<void> {
    return await this.courseRepository.delete(id);
  }

  async update(id: string, course: Course): Promise<void> {
    return await this.courseRepository.update(id, course);
  }

  async replace(id: string, course: Course): Promise<void> {
    return await this.courseRepository.replace(id, course);
  }
}
