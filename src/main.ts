import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { boot } from './boot';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await boot(app);
  await app.listen(3000);
}
bootstrap();
