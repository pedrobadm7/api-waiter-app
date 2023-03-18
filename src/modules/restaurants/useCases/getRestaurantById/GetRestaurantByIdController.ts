import { Request, Response } from 'express';
import { GetRestaurantByIdService } from './GetRestaurantByIdService';

class GetRestaurantByIdController {
  constructor(private getRestaurantByIdService: GetRestaurantByIdService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const restaurant = await this.getRestaurantByIdService.execute(id);

    try {
      return res.status(200).json(restaurant);
    } catch {
      return res.sendStatus(500);
    }
  }
}

export { GetRestaurantByIdController };
