import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  constructor(private service: HealthService) {}

  @Get()
  async health() {
    try {
      if (await this.service.checkStore()) {
        return 'All good';
      }
      return 'All bad';
    } catch (e) {
      throw e;
    }
  }
}
