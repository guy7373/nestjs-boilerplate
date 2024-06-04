import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { StoreModule } from '../store/store.module';
import { HealthService } from './health.service';

@Module({
  imports: [StoreModule],
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}
