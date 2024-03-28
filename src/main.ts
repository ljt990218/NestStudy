import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import * as cors from 'cors';

function MiddlewareAll(req: any, res: any, next: any) {
  // console.log('main MiddlewareAll');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new Logger()
  });
  app.use(cors());
  app.use(MiddlewareAll);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3033);
}
bootstrap();
