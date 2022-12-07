import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseModule } from './course/course.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'nest.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    CourseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
