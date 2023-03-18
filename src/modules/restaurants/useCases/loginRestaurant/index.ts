import { BcryptProvider } from '../../../../providers/bcrypt-provider';
import { JsonWebTokenProvider } from '../../../../providers/jsonwebtoken-provider';
import { RestaurantsRepository } from '../../repositories/implementations/RestaurantsRepository';
import { LoginRestaurantController } from './LoginRestaurantController';
import { LoginRestaurantService } from './LoginRestaurantService';

const restaurantRepository = RestaurantsRepository.getInstance();
const bcryptProvider = new BcryptProvider();
const jsonWebTokenProvider = new JsonWebTokenProvider();
const loginRestaurantService = new LoginRestaurantService(
  restaurantRepository,
  bcryptProvider,
  jsonWebTokenProvider
);
const loginRestaurantController = new LoginRestaurantController(
  loginRestaurantService
);

export { loginRestaurantController };
