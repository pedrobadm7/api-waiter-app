import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { RegisterRestaurantService } from './RegisterRestaurantService';

class RegisterRestaurantController {

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password, confirmpassword, products } = req.body;

    const registerRestaurantService = container.resolve(RegisterRestaurantService);
    const restaurant = await registerRestaurantService.execute({
      restaurantName: name,
      email,
      password,
      confirmpassword,
      products,
    });

    try {
      return res.status(201).json(restaurant);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
}

export { RegisterRestaurantController };
