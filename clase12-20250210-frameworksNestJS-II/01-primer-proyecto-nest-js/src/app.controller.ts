import { BadRequestException, Body, Controller, Get, HttpException, HttpStatus, InternalServerErrorException, Param, ParseIntPipe, Post, Query, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { ClassNewHeroe, NewHeroeInterface } from './interfaces/HeroesInterfaces';

@Controller("api/pruebas")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("saludo")
  getHello(@Query("nombre") nombre:string, @Query("edad", new ParseIntPipe({optional:true})) edad: number): string {

    // edad=Number(edad)
    // if(isNaN(edad)){
    //   throw new HttpException("La edad debe ser de tipo number", 
    //   HttpStatus.BAD_REQUEST)

    //   // throw new BadRequestException("La edad debe ser de tipo number")
    //   // throw new InternalServerErrorException("Error interno")
    // }
    console.log(edad)
    console.log(nombre)

    return this.appService.getHello();
  }

  @Get("heroes")
  getHeroes(){
    return this.appService.getHeroes()
  }

  @Get("heroes/:id")
  getHeroeById(@Param("id", ParseIntPipe) id:number){
    console.log(id, typeof id)

    // id="matias"

    return this.appService.getHeroeById(id)
  }

  @Post("heroes")
  creaHeroe(@Body(new ValidationPipe({
    whitelist:true, forbidNonWhitelisted: true
  })) heroe:ClassNewHeroe){
    console.log(heroe, Object.keys(heroe))

    return this.appService.createHeroe(heroe)
  }
}
