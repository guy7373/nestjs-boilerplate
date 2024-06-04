import { Inject, Injectable } from '@nestjs/common';
import * as pg from 'pg-promise';

@Injectable()
export class HealthDal {
  constructor(
    @Inject('db') private readonly db: pg.IDatabase<Record<string, unknown>>,
  ) {}

  public async health() {
    return (await this.db.one('select 3 as num')).num;
  }
}
