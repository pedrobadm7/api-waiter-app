import { Request, Response } from 'express';
import { OrderRepository } from '../../repositories/OrdersRepository';
import { ListOrdersService } from '../../services/ListOrdersService';

const ordersRepository = new OrderRepository();

export async function listOrders(req: Request, res: Response) {
  try {
    const listOrdersService = new ListOrdersService(ordersRepository);

    const orders = await listOrdersService.execute();

    res.json(orders);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
