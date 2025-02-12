import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

// import * as mongoose from 'mongoose';

async function bootstrap() {
  // try {
  //   const mongoUri=""+process.env.MONGO_URL
  //   await mongoose.connect(mongoUri, {dbName: process.env.DB_NAME})
  //   Logger.log("DB Online!", "Conexión Mongoose")
  //   const modelProducto=mongoose.model("productos", 
  //     new mongoose.Schema({
  //       nombre: String, precio: Number
  //     })
  //   )
  //   await modelProducto.create({nombre:"Martillo", precio:2000})
  //   Logger.log(await modelProducto.find().lean(), "Conexión Mongoose")
  // } catch (error) {
  //   Logger.error(`Error: ${error.message}...!!!`, "Conexión Mongoose")
  // }
  const PORT=process.env.PORT ?? 3007
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  Logger.log(`Server on line en puerto ${PORT}`,"Main App")
}
bootstrap();
