import 'reflect-metadata';
import 'dotenv/config';

import { AppDataSource } from '../../../database/data-source';
import { app } from './app';

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log('------------------------------------------');
    console.log('💡 Data Source has been initialized!');
    console.log('------------------------------------------');

    app.listen(PORT, () => {
      console.log(`🚀 Server started on http://localhost:${PORT}`);
      console.log('------------------------------------------');
    });
  })
  .catch(error => {
    console.log('------------------------------------------');
    console.error('💥 Error during Data Source initialization =>', error);
    console.log('------------------------------------------');
  });
