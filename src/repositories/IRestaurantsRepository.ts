import { Types } from 'mongoose';

export interface IRestaurant {
  email: string;
  password: string;
  name: string;
  products: Types.ObjectId[] | null;
}

export interface IRestaurantsRepository {
  findById(id: string, arg: string): Promise<IRestaurant | null>;
}
