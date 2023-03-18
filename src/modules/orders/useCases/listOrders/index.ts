import { OrderRepository } from '../../repositories/implementations/OrdersRepository';
import { ListOrdersController } from './ListOrdersController';
import { ListOrdersService } from './ListOrdersService';

const orderRepository = OrderRepository.getInstance();
const listOrdersService = new ListOrdersService(orderRepository);
const listOrdersController = new ListOrdersController(listOrdersService);

export { listOrdersController };
