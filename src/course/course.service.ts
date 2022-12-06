import { Controller } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course, CourseDocument } from './course.schema';

@Controller()
export class CourseService {
  constructor(
    @InjectModel(Course.name) private courseModel: Model<CourseDocument>,
  ) {}

  async create(course: Course) {
    const createdCourse = new this.courseModel(course);
    return createdCourse.save();
  }

  async findAll(): Promise<Course[]> {
    return this.courseModel.find().exec();
  }

  async findById(id: string): Promise<Course> {
    return this.courseModel.findById(id).exec();
  }

  async delete(id: string): Promise<void> {
    await this.courseModel.deleteOne({ _id: id }).exec();
  }

  async update(id: string, course: Course): Promise<void> {
    await this.courseModel
      .updateOne(
        {
          _id: id,
        },
        course,
      )
      .exec();
  }

  async replace(id: string, course: Course): Promise<void> {
    await this.courseModel
      .replaceOne(
        {
          _id: id,
        },
        course,
      )
      .exec();
  }
}
