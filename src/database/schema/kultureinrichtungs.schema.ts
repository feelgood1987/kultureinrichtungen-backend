import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { IKultureinrichtung } from 'src/interfaces';

@Schema({
  timestamps: true,
})
export class Kultureinrichtung implements IKultureinrichtung {
  name: string;
  description: string;
  location: { type: 'Point'; coordinates: number[] };
  category: 'museum' | 'theater' | 'cinema' | 'library' | 'concert hall';

  createdAt?: Date;
  updatedAt?: Date;
}

export const KultureinrichtungSchema =
  SchemaFactory.createForClass(Kultureinrichtung);
