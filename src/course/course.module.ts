import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseController } from './course.controller';
import { CourseSchema } from './course.schema';
import { CourseService } from './course.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Course', schema: CourseSchema }]),
  ],
  providers: [CourseService],
  controllers: [CourseController],
})
export class CourseModule {}
