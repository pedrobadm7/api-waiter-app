import { Order } from '../models/Order';
import { IOrder, IOrdersRepository } from './IOrdersRepository';

export class OrderRepository implements IOrdersRepository {
  async findOrderById(orderId: string): Promise<IOrder | null> {
    const order = await Order.findById(orderId);

    return order;
  }

  async cancel(orderId: string): Promise<void> {
    await Order.findByIdAndDelete(orderId);
  }
}
