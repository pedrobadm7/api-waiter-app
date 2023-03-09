import { Types } from 'mongoose';

export interface IOrder {
  populate(arg0: string): unknown;
  table: string;
  status: string;
  createdAt: Date;
  products: {
    product: Types.ObjectId;
    quantity: number;
  }[];
}

export interface IOrdersRepository {
  findOrderById(orderId: string): Promise<IOrder | null>;
  cancel(orderId: string): Promise<void>;
  update(orderId: string, status: string): Promise<void>;
  create(table: string, products: IOrder['products']): Promise<IOrder>;
  list(): Promise<IOrder[]>;
}
