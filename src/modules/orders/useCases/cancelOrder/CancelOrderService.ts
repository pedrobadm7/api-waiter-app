import { inject, injectable } from 'tsyringe';
import { IOrdersRepository } from '../../repositories/IOrdersRepository';

@injectable()
class CancelOrderService {
  constructor(
    @inject('OrderRepository')
    private ordersRepository: IOrdersRepository
    ) {}

  async execute(orderId: string) {
    const order = await this.ordersRepository.findOrderById(orderId);

    if (!order) {
      throw new Error('This order do not exist!');
    }

    await this.ordersRepository.cancel(orderId);
  }
}

export { CancelOrderService };
