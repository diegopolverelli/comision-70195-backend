import { IsOptional, IsString } from "class-validator"

export interface NewHeroeInterface        {
    name:string,
    alias:string,
    team?:string,
    publisher:string,
  }

export class ClassNewHeroe{

    @IsString()
    name:string

    @IsString()
    alias:string
    
    @IsString({message:"team tiene que ser de tipo cadena de caracteres...!!!"})
    @IsOptional()
    team?:string
    
    @IsString()
    publisher:string

    // constructor(nombre){
    //     this.name=nombre
    // }
}

type tipoHeroe={
    name:string, 
    alias:string
}

let heroe01:tipoHeroe
let heroe02:NewHeroeInterface
let heroe03:ClassNewHeroe


