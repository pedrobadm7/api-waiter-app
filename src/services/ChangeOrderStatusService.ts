import { IOrdersRepository } from '../repositories/IOrdersRepository';

class ChangeOrderStatusService {
  constructor(private orderRepository: IOrdersRepository) {}

  async execute(orderId: string, status: string) {
    const order = await this.orderRepository.findOrderById(orderId);

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      throw new Error(
        'Status should be one of these: WAITING, IN_PRODUCTION, DONE'
      );
    }

    if (order?.status === 'IN_PRODUCTION' && status === 'WAITING') {
      throw new Error('In production orders cant go back to waiting status');
    }

    await this.orderRepository.update(orderId, status);
  }
}

export { ChangeOrderStatusService };
