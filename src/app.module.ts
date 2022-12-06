import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseModule } from './course/course.module';

const MONGO_URI =
  'mongodb://course:course@127.0.0.1:27017/course?directConnection=true';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'nest.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(MONGO_URI),
    CourseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
