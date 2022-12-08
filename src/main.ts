import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
import { AppModule } from './app.module';

async function bootstrap() {
  config();
  const PORT = process.env.PORT || 3001;
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug', 'log'],
  });
  app.enableCors();
  await app.listen(PORT);
}
bootstrap();
