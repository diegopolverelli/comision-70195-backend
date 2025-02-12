import { Logger, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { CarritosModule } from './carritos/carritos.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from './middlewares/pruebaMiddleware';
import { METHODS } from 'http';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath:"./src/.env"}),
    MongooseModule.forRoot(process.env.MONGO_URL!, {dbName:process.env.DB_NAME}),
    ProductosModule, 
    CarritosModule, UsuariosModule, AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  constructor(){
    // Logger.verbose(process.env.MONGO_URL, "AppModule")
    // Logger.verbose(process.env.DB_NAME, "AppModule")
  }
  configure(consumer: MiddlewareConsumer) {
    // throw new Error('Method not implemented.');
    // consumer.apply(LoggerMiddleware).forRoutes("*")
    consumer.apply(LoggerMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}

interface PruebaInterface{
  nombre:string
  color:string
}
