import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseModule } from './course/course.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(
      process.env.MONGO_URI_PROD || process.env.MONGO_URI_DEV,
    ),
    CourseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
