import { IsNumber, IsString } from "class-validator"

export class CreateProductoDto {

    @IsString()
    title: string

    @IsString()
    code: string

    @IsNumber()
    price: number

    @IsString()
    description: string
}
