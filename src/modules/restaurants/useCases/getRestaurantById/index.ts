import { RestaurantsRepository } from '../../repositories/implementations/RestaurantsRepository';
import { GetRestaurantByIdController } from './GetRestaurantByIdController';
import { GetRestaurantByIdService } from './GetRestaurantByIdService';

const restaurantsRepository = RestaurantsRepository.getInstance();
const getRestaurantByIdService = new GetRestaurantByIdService(
  restaurantsRepository
);
const getRestaurantByIdController = new GetRestaurantByIdController(
  getRestaurantByIdService
);

export { getRestaurantByIdController };
