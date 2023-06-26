import { Router } from 'express';
import { cancelOrderController } from '../modules/orders/useCases/cancelOrder';
import { changeOrderStatusController } from '../modules/orders/useCases/changeOrderStatus';

import { ListOrdersController } from '../modules/orders/useCases/listOrders/ListOrdersController';
import { CreateOrderController } from '../modules/orders/useCases/createOrder/CreateOrderController';

const listOrdersController = new ListOrdersController()
const createOrderController = new CreateOrderController()

export const ordersRoutes = Router();

ordersRoutes.get('/', listOrdersController.handle);

ordersRoutes.post('/', createOrderController.handle);

ordersRoutes.patch('/:orderId', (req, res) => {
  return changeOrderStatusController.handle(req, res);
});

ordersRoutes.delete('/:orderId', (req, res) => {
  return cancelOrderController.handle(req, res);
});
