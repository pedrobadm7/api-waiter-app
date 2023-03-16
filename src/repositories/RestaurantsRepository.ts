import { Restaurant } from '../models/Restaurant';
import { IRestaurant, IRestaurantsRepository } from './IRestaurantsRepository';

export class RestaurantsRepository implements IRestaurantsRepository {
  async findById(id: string): Promise<IRestaurant | null> {
    const restaurant = await Restaurant.findById(id, '-password');

    return restaurant;
  }
}
