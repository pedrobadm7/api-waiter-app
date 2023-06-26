import { Request, Response } from 'express';
import { LoginRestaurantService } from './LoginRestaurantService';
import { container } from 'tsyringe';
class LoginRestaurantController {

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;

      const loginRestaurantService = container.resolve( LoginRestaurantService )
      const token = await loginRestaurantService.execute(email, password);

      return res.status(200).json({token});
    } catch {
      return res.sendStatus(500);
    }
  }
}

export { LoginRestaurantController };
