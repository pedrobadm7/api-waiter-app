import { SocketIoProvider } from '../../../../providers/socketio-provider';
import { OrderRepository } from '../../repositories/implementations/OrdersRepository';
import { CreateOrderController } from './CreateOrderController';
import { CreateOrderService } from './CreateOrderService';

const ordersRepository = new OrderRepository();
const socketIoProvider = new SocketIoProvider();
const createOrderService = new CreateOrderService(
  ordersRepository,
  socketIoProvider
);
const createOrderController = new CreateOrderController(createOrderService);

export { createOrderController };
