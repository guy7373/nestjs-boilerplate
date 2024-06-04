import { INestApplication } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const boot = async (app: INestApplication) => {
  app.useLogger(app.get(Logger));
  app.flushLogs();

  const config = new DocumentBuilder()
    .setTitle('Inspire Boilerplate Service')
    .setDescription('A Boilerplate for NestJS services')
    .setVersion('1.0')
    .addTag('Boilerplate')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};
