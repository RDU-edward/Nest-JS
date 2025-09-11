import { NestFactory } from '@nestjs/core';
import { log } from 'console';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT ?? 3004);
  console.log(
    `🚀 Application is running on: http://localhost:${process.env.PORT ?? 3004}`,
  );
}
bootstrap();
