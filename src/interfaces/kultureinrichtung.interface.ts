export interface IKultureinrichtung {
  name: string;
  description: string;
  location: { type: 'Point'; coordinates: number[] };
  category: 'museum' | 'theater' | 'cinema' | 'library' | 'concert hall';

  _id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
