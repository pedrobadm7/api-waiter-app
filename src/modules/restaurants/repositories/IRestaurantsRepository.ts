import { Types } from 'mongoose';

export interface IRestaurant {
  email: string;
  password: string;
  name: string;
  products: Types.ObjectId[] | null;
}

export interface IRestaurantsRepository {
  findById(id: string, arg: string): Promise<IRestaurant | null>;
  findRestaurant(email: string): Promise<IRestaurant | null>;
  getIdByEmail(email: string): Promise<Types.ObjectId | undefined>;
  createRestaurant(
    email: string,
    password: string,
    name: string,
    products: string[] | null,
  ): Promise<IRestaurant>;
}
