export interface IUser {
  name: string;
  email: string;
  password: string;
  role: 'viewer' | 'editor';

  _id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
