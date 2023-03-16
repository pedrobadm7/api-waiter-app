import { Request, Response } from 'express';
import { RestaurantsRepository } from '../../repositories/RestaurantsRepository';
import { GetRestaurantByIdService } from '../../services/GetRestaurantByIdService';

const restaurantsRepository = new RestaurantsRepository();

export async function getRestaurantById(req: Request, res: Response) {
  const { id } = req.params;

  const getRestaurantByIdService = new GetRestaurantByIdService(
    restaurantsRepository
  );

  const restaurant = await getRestaurantByIdService.execute(id);

  return res.status(200).json(restaurant);
}
