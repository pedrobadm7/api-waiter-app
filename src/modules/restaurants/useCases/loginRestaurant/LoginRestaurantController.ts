import { Request, Response } from 'express';
import { LoginRestaurantService } from './LoginRestaurantService';
class LoginRestaurantController {
  constructor(private loginRestaurantService: LoginRestaurantService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;

      const token = await this.loginRestaurantService.execute(email, password);

      return res.status(200).json({token});
    } catch {
      return res.sendStatus(500);
    }
  }
}

export { LoginRestaurantController };
