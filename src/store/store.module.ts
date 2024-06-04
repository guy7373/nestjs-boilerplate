import 'dotenv/config';
import { Inject, Module } from '@nestjs/common';
import * as pg from 'pg-promise';
import { HealthDal } from './health.dal';

const pgp = pg({});

const getConnection = () =>
  pgp({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

@Module({
  providers: [
    {
      provide: 'db',
      useFactory: () => getConnection(),
    },
    HealthDal,
  ],
  exports: [HealthDal],
})
export class StoreModule {
  constructor(
    @Inject('db') private readonly db: pg.IDatabase<Record<string, unknown>>,
  ) {}
  public async onApplicationShutdown() {
    if (!this.db.$pool.ended)
      await this.db.$pool.end((err) => {
        if (err) console.log(err);
      });
  }
}
