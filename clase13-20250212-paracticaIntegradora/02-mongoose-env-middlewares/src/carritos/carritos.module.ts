import { Module } from '@nestjs/common';
import { CarritosService } from './carritos.service';
import { CarritosController } from './carritos.controller';

@Module({
  controllers: [CarritosController],
  providers: [CarritosService],
})
export class CarritosModule {}
