import { BcryptProvider } from '../providers/bcrypt-provider';
import {
  IRestaurant,
  IRestaurantsRepository,
} from '../repositories/IRestaurantsRepository';

class RegisterRestaurantService {
  constructor(
    private restaurantsRepository: IRestaurantsRepository,
    private bcryptProvider: BcryptProvider
  ) {}

  async execute({
    restaurantName,
    email,
    password,
    confirmpassword,
  }: {
    restaurantName: string;
    email: string;
    password: string;
    confirmpassword: string;
  }): Promise<IRestaurant> {
    if (!restaurantName) {
      throw new Error('You must provide a restaurant name');
    }

    if (!email) {
      throw new Error('You must provide an email');
    }

    if (!password) {
      throw new Error('You must provide a password');
    }

    if (password !== confirmpassword) {
      throw new Error('Passwords do not match');
    }

    const restaurantExists = await this.restaurantsRepository.findRestaurant(
      email
    );

    if (restaurantExists) {
      throw new Error('This restaurant already exists');
    }

    const salt = await this.bcryptProvider.generateSalt(12);
    const passwordHash = await this.bcryptProvider.hashGenerator(
      password,
      salt
    );

    const restaurant = await this.restaurantsRepository.createRestaurant(
      restaurantName,
      email,
      passwordHash
    );

    return restaurant;
  }
}

export { RegisterRestaurantService };
