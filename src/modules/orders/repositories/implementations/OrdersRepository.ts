import { Order } from '../../model/Order';
import { IOrder, IOrdersRepository } from '../IOrdersRepository';

export class OrderRepository implements IOrdersRepository {
  private static INSTANCE: OrderRepository;

  public static getInstance() {
    if (!OrderRepository.INSTANCE) {
      OrderRepository.INSTANCE = new OrderRepository();
    }

    return OrderRepository.INSTANCE;
  }
  async findOrderById(orderId: string): Promise<IOrder | null> {
    const order = await Order.findById(orderId);

    return order;
  }

  async create(table: string, products: IOrder['products']): Promise<IOrder> {
    const order = await Order.create({
      table,
      products,
    });
    const orderDetails = await order.populate('products.product');
    return orderDetails;
  }

  async cancel(orderId: string): Promise<void> {
    await Order.findByIdAndDelete(orderId);
  }

  async update(orderId: string, status: string): Promise<void> {
    await Order.findByIdAndUpdate(orderId, { status });
  }

  async list(): Promise<IOrder[]> {
    const orders = await Order.find()
      .sort({ createdAt: 1 })
      .populate('products.product');

    return orders;
  }
}
