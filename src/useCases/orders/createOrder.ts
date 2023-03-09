import { Request, Response } from 'express';
import { SocketIoProvider } from '../../providers/socketio-provider';
import { OrderRepository } from '../../repositories/OrdersRepository';
import { CreateOrderService } from '../../services/CreateOrderService';

const orderRepository = new OrderRepository();
const socketIoProvider = new SocketIoProvider();

export async function createOrder(req: Request, res: Response) {
  try {
    const { table, products } = req.body;

    const createOrderService = new CreateOrderService(
      orderRepository,
      socketIoProvider
    );

    const order = await createOrderService.execute(table, products);

    res.status(201).json(order);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
