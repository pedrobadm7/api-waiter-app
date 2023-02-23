import { Request, Response } from 'express';
import { Restaurant } from '../../models/Restaurant';

export async function getRestaurantById(req: Request, res: Response) {
  const { id } = req.params;

  const restaurant = await Restaurant.findById(id, '-password');

  if (!restaurant) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  return res.status(200).json(restaurant);
}
