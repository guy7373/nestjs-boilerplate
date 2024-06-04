import { upAll, exec } from 'docker-compose';
import { join } from 'path';
import * as isReachable from 'is-reachable';
import { execSync } from "child_process";

module.exports = async () => {
  console.log('Global setup');

  const isDbUp = await isReachable(`localhost:${process.env.DB_PORT}`);
  if (!isDbUp) {
    await upAll({
      cwd: join(__dirname),
      log: true,
    });

    await exec(
      'database',
      ['sh', '-c', 'until pg_isready ; do sleep 1; done'],
      {
        cwd: join(__dirname),
      },
    );
    // execSync('yarn run db:migrate');
  }
};
