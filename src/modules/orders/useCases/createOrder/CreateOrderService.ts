import { inject, injectable } from 'tsyringe';
import { SocketIoProvider } from '../../../../providers/socketio-provider';
import {
  IOrder,
  IOrdersRepository,
} from '../../repositories/IOrdersRepository';

@injectable()
class CreateOrderService {
  constructor(
    @inject('OrderRepository')
    private ordersRepository: IOrdersRepository,
    private socketIoProvider: SocketIoProvider
  ) {}

  async execute(table: string, products: IOrder['products']) {
    if (!table) {
      throw new Error('Table is required');
    }

    const order = await this.ordersRepository.create(table, products);

    this.socketIoProvider.emit('orders@new', order);
  }
}

export { CreateOrderService };
