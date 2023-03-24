import { OrderRepository } from '../../repositories/implementations/OrdersRepository';
import { ChangeOrderStatusController } from './ChangeOrderStatusController';
import { ChangeOrderStatusService } from './ChangeOrderStatusService';

const ordersRepository = new OrderRepository();
const changeOrderStatusService = new ChangeOrderStatusService(ordersRepository);
const changeOrderStatusController = new ChangeOrderStatusController(
  changeOrderStatusService
);

export { changeOrderStatusController };
