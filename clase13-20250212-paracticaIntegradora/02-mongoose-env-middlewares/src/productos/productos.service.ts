import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Producto } from './schemas/productoSchema';
import { Model } from 'mongoose';

@Injectable()
export class ProductosService {

  constructor(@InjectModel(Producto.name) private productoModelo: Model<Producto>){}

  async create(createProductoDto: CreateProductoDto) {
    // return 'This action adds a new producto';
    let existe=await this.productoModelo.findOne({code:createProductoDto.code})
    if(existe){
      throw new BadRequestException(`El code ${createProductoDto.code} ya existe en DB`)
    }
    return this.productoModelo.create(createProductoDto)
  }

  findAll() {
    // return `This action returns all productos`;
    return this.productoModelo.find().lean()
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
