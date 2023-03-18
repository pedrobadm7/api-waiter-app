import { Request, Response } from 'express';
import { RegisterRestaurantService } from './RegisterRestaurantService';

class RegisterRestaurantController {
  constructor(private registerRestaurantService: RegisterRestaurantService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password, confirmpassword } = req.body;

    const restaurant = await this.registerRestaurantService.execute({
      restaurantName: name,
      email,
      password,
      confirmpassword,
    });

    try {
      return res.status(201).json(restaurant);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
}

export { RegisterRestaurantController };
