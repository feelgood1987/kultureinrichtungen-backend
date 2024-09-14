import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { IUser } from 'src/interfaces/user.interface';

@Schema({
  timestamps: true,
})
export class User implements IUser {
  name: string;
  email: string;
  password: string;
  role: 'viewer' | 'editor';

  createdAt?: Date;
  updatedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
