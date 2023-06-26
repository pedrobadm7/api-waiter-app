import { inject, injectable } from 'tsyringe';
import { BcryptProvider } from '../../../../providers/bcrypt-provider';
import { JsonWebTokenProvider } from '../../../../providers/jsonwebtoken-provider';
import { IRestaurantsRepository } from '../../repositories/IRestaurantsRepository';

@injectable()
class LoginRestaurantService {
  constructor(
    @inject('RestaurantsRepository')
    private restaurantsRepository: IRestaurantsRepository,
    private bcryptProvider: BcryptProvider,
    private jsonWebTokenProvider: JsonWebTokenProvider
  ) {}

  async execute(email: string, password: string): Promise<string> {
    if (!email) {
      throw new Error('You must provide email');
    }

    if (!password) {
      throw new Error('You must provide password');
    }

    const restaurant = await this.restaurantsRepository.findRestaurant(email);

    if (!restaurant) {
      throw new Error('Email or password invalid');
    }

    const checkPassword = await this.bcryptProvider.compare(
      password,
      restaurant.password
    );

    if (!checkPassword) {
      throw new Error('Email or password invalid');
    }

    const secret = process.env.SECRET;
    const id = this.restaurantsRepository.getIdByEmail(email);

    const token = this.jsonWebTokenProvider.sign(id, secret as string);

    return token;
  }
}

export { LoginRestaurantService };
