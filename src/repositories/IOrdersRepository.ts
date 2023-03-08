import { Types } from 'mongoose';

export interface IOrder {
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
}
