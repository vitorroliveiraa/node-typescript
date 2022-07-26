import { createConnection } from '../../../database';
import { app } from './app';

const PORT = process.env.PORT || 3000;

createConnection()
  .then(() => {
    console.log('------------------------------------------');
    console.log('💡 Data Source has been initialized!');
    console.log('------------------------------------------');
  })
  .catch(error => {
    console.log('------------------------------------------');
    console.error('💥 Error during Data Source initialization =>', {
      ...error,
    });
    console.log('------------------------------------------');
  });

app.listen(PORT, () => {
  console.log('------------------------------------------');
  console.log(`🚀 Server started on http://localhost:${PORT}`);
  console.log('------------------------------------------');
});
