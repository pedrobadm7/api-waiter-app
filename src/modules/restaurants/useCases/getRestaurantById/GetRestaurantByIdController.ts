import { Request, Response } from 'express';
import { GetRestaurantByIdService } from './GetRestaurantByIdService';
import { container } from 'tsyringe';

class GetRestaurantByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const getRestaurantByIdService = container.resolve(GetRestaurantByIdService)
    const restaurant = await getRestaurantByIdService.execute(id);

    try {
      return res.status(200).json(restaurant);
    } catch {
      return res.sendStatus(500);
    }
  }
}

export { GetRestaurantByIdController };
