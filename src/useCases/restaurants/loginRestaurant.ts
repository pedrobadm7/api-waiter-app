import { Request, Response } from 'express';
import { BcryptProvider } from '../../providers/bcrypt-provider';
import { JsonWebTokenProvider } from '../../providers/jsonwebtoken-provider';
import { RestaurantsRepository } from '../../repositories/RestaurantsRepository';
import { LoginRestaurantService } from '../../services/LoginRestaurantService';

const restaurantsRepository = new RestaurantsRepository();
const bcryptProvider = new BcryptProvider();
const jsonWebTokenProvider = new JsonWebTokenProvider();

export async function loginRestaurant(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const loginRestaurantService = new LoginRestaurantService(
      restaurantsRepository,
      bcryptProvider,
      jsonWebTokenProvider
    );

    const token = await loginRestaurantService.execute(email, password);

    res.status(200).json(token);
  } catch (error) {
    res.status(500).json({ message: 'Aconteceu um erro no servidor!' + error });
  }
}
