import { Request, Response } from 'express';
import { OrderRepository } from '../../repositories/OrdersRepository';
import { CancelOrderService } from '../../services/CancelOrderService';

const ordersRepository = new OrderRepository();

export async function cancelOrder(req: Request, res: Response) {
  try {
    const { orderId } = req.params;

    const cancelOrderService = new CancelOrderService(ordersRepository);

    cancelOrderService.execute(orderId);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
