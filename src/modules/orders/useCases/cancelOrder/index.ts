import { OrderRepository } from '../../repositories/implementations/OrdersRepository';
import { CancelOrderController } from './CancelOrderController';
import { CancelOrderService } from './CancelOrderService';

const orderRepository = new OrderRepository();
const cancelOrderService = new CancelOrderService(orderRepository);
const cancelOrderController = new CancelOrderController(cancelOrderService);

export { cancelOrderController };
