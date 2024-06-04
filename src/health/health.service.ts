import { Injectable, Logger } from '@nestjs/common';
import { HealthDal } from '../store/health.dal';

@Injectable()
export class HealthService {
  private readonly logger: Logger;
  constructor(private readonly healthDal: HealthDal) {
    this.logger = new Logger(HealthService.name);
  }

  public async checkStore() {
    this.logger.log('Checking store health');
    return (await this.healthDal.health()) === 3;
  }
}
