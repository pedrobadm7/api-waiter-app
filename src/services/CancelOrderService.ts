import { OrderRepository } from '../repositories/OrdersRepository';

class CancelOrderService {
  constructor(private ordersRepository: OrderRepository) {}

  async execute(orderId: string) {
    const order = await this.ordersRepository.findOrderById(orderId);

    if (!order) {
      throw new Error('This order do not exist!');
    }

    await this.ordersRepository.cancel(orderId);
  }
}

export { CancelOrderService };
