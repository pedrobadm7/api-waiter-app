import { Request, Response } from 'express';
import { OrderRepository } from '../../repositories/OrdersRepository';
import { ChangeOrderStatusService } from '../../services/ChangeOrderStatusService';

const orderRepository = new OrderRepository();

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const changeOrderStatusService = new ChangeOrderStatusService(
      orderRepository
    );

    await changeOrderStatusService.execute(orderId, status);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
