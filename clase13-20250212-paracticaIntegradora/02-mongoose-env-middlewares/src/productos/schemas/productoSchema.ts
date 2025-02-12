import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DocumentoProducto = HydratedDocument<Producto>;

@Schema()
export class Producto {
  @Prop()
  title: string;

    // codigo:{
    //     type: String, unique:true
    // }

  @Prop({unique:true})
  code: string;

  @Prop({default: 0})
  price: number;

  @Prop()
  description: string;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);
