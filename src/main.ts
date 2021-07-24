import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const fs = require('fs');

async function bootstrap() {
  // const httpsOptions = {
  //   key: fs.readFileSync('./secrets/private-key.pem'),
  //   cert: fs.readFileSync('./secrets/public-certificate.pem'),
  // };
  const app = await NestFactory.create(AppModule
  //   , {
  //   httpsOptions,
  // }
  );
  await app.listen(3000);
}
bootstrap();

