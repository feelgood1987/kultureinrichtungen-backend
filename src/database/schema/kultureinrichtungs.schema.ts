import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IKultureinrichtung } from 'src/interfaces';

@Schema({
  timestamps: true,
})
export class Kultureinrichtung implements IKultureinrichtung {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: false })
  description: string;

  @Prop({ type: Object, required: true })
  location: { type: 'Point'; coordinates: number[] };

  @Prop({ type: String, required: false })
  category: 'museum' | 'theater' | 'cinema' | 'library' | 'concert hall';

  createdAt?: Date;
  updatedAt?: Date;
}

export const KultureinrichtungSchema =
  SchemaFactory.createForClass(Kultureinrichtung);
