import { IsNumber, IsOptional, IsString } from "class-validator"

export class CreateProductoDto {

    @IsString({message:"title es requerido, y de tipo string"})
    title:string
    
    @IsString()
    code: string
    
    @IsNumber()
    @IsOptional()
    stock?: number
    
    @IsNumber()
    @IsOptional()
    price?: number
}
