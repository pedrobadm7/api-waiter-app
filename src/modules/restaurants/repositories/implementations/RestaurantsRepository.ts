import { Types } from 'mongoose';
import { Restaurant } from '../../model/Restaurant';
import { IRestaurant, IRestaurantsRepository } from '../IRestaurantsRepository';

export class RestaurantsRepository implements IRestaurantsRepository {
  private static INSTANCE: RestaurantsRepository;

  async findById(id: string): Promise<IRestaurant | null> {
    const restaurant = await Restaurant.findById(id, '-password');

    return restaurant;
  }

  async findRestaurant(email: string): Promise<IRestaurant | null> {
    const restaurant = await Restaurant.findOne({ email: email });

    return restaurant;
  }

  async getIdByEmail(email: string): Promise<Types.ObjectId | undefined> {
    const restaurant = await Restaurant.findOne({ email: email });

    const id = restaurant?._id;
    return id;
  }

  async createRestaurant(
    name: string,
    email: string,
    password: string
  ): Promise<IRestaurant> {
    const restaurant = await Restaurant.create({
      name: name,
      email: email,
      password: password,
    });

    await restaurant.save();
    return restaurant;
  }
}
