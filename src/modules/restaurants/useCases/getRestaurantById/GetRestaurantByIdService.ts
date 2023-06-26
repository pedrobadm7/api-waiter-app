import { inject, injectable } from 'tsyringe';
import {
  IRestaurant,
  IRestaurantsRepository,
} from '../../repositories/IRestaurantsRepository';

@injectable()
class GetRestaurantByIdService {
  constructor(
    @inject('RestaurantsRepository')
    private restaurantsRepository: IRestaurantsRepository
  ) {}

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
