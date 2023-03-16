import {
  IRestaurant,
  IRestaurantsRepository,
} from '../repositories/IRestaurantsRepository';

class GetRestaurantByIdService {
  constructor(private restaurantsRepository: IRestaurantsRepository) {}

  async execute(id: string): Promise<IRestaurant> {
    const restaurant = await this.restaurantsRepository.findById(
      id,
      '-password'
    );

    if (!restaurant) {
      throw new Error('Usuário não encontrado');
    }

    return restaurant;
  }
}

export { GetRestaurantByIdService };
