import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const PORT=process.env.PORT || 3000
  const app = await NestFactory.create(AppModule);
  // console.log(`Server corriendo en puerto ${PORT}`)
  // Logger.verbose(`Server corriendo en puerto ${PORT}`, "main.ts")
  Logger.log(`Server corriendo en puerto ${PORT}`, "main.ts")
  await app.listen(process.env.PORT ?? PORT);
}
bootstrap();
