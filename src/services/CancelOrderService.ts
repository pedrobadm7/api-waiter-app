import { IOrdersRepository } from '../repositories/IOrdersRepository';

class CancelOrderService {
  constructor(private ordersRepository: IOrdersRepository) {}

  async execute(orderId: string) {
    const order = await this.ordersRepository.findOrderById(orderId);

    if (!order) {
      throw new Error('This order do not exist!');
    }

    await this.ordersRepository.cancel(orderId);
  }
}

export { CancelOrderService };
