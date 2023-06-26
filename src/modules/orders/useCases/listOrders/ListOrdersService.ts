import { inject, injectable } from 'tsyringe';
import {
  IOrder,
  IOrdersRepository,
} from '../../repositories/IOrdersRepository';

@injectable()
class ListOrdersService {
  constructor(
    @inject('OrderRepository')
    private ordersRepository: IOrdersRepository
    ) {}

  async execute(): Promise<IOrder[]> {
    const orders = await this.ordersRepository.list();

    return orders;
  }
}

export { ListOrdersService };
