import { Request, Response } from 'express';
import { BcryptProvider } from '../../../../providers/bcrypt-provider';
import { RestaurantsRepository } from '../../repositories/RestaurantsRepository';
import { RegisterRestaurantService } from './RegisterRestaurantService';

const restaurantsRepository = new RestaurantsRepository();
const bcryptProvider = new BcryptProvider();

export async function RegisterRestaurantsController(
  req: Request,
  res: Response
) {
  try {
    const { name, email, password, confirmpassword } = req.body;

    const registerRestaurantService = new RegisterRestaurantService(
      restaurantsRepository,
      bcryptProvider
    );

    const restaurant = await registerRestaurantService.execute({
      restaurantName: name,
      email,
      password,
      confirmpassword,
    });

    return res.status(201).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: 'Aconteceu um erro no servidor!' + error });
  }
}
