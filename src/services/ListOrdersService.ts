import { IOrder, IOrdersRepository } from '../repositories/IOrdersRepository';

class ListOrdersService {
  constructor(private ordersRepository: IOrdersRepository) {}

  async execute(): Promise<IOrder[]> {
    const orders = await this.ordersRepository.list();

    return orders;
  }
}

export { ListOrdersService };
