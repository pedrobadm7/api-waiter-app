import { BcryptProvider } from '../../../../providers/bcrypt-provider';
import { RestaurantsRepository } from '../../repositories/implementations/RestaurantsRepository';
import { RegisterRestaurantController } from './RegisterRestaurantController';

import { RegisterRestaurantService } from './RegisterRestaurantService';

const restaurantsRepository = RestaurantsRepository.getInstance();
const bcryptProvider = new BcryptProvider();
const registerRestaurantService = new RegisterRestaurantService(
  restaurantsRepository,
  bcryptProvider
);
const registerRestaurantController = new RegisterRestaurantController(
  registerRestaurantService
);

export { registerRestaurantController };
