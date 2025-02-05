import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("api/pruebas")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("saludo")
  getHello(@Query("nombre") nombre:string): string {
    return this.appService.getHello();
  }
}
