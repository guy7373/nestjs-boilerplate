import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { StoreModule } from './store/store.module';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [HealthModule, StoreModule, LoggerModule.forRoot()],
})
export class AppModule {}
