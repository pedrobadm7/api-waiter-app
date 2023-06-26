import { Router } from 'express';
import { cancelOrderController } from '../modules/orders/useCases/cancelOrder';
import { changeOrderStatusController } from '../modules/orders/useCases/changeOrderStatus';
import { createOrderController } from '../modules/orders/useCases/createOrder';

import { ListOrdersController } from '../modules/orders/useCases/listOrders/ListOrdersController';

const listOrdersController = new ListOrdersController()

export const ordersRoutes = Router();

ordersRoutes.get('/', listOrdersController.handle);

ordersRoutes.post('/', (req, res) => {
  return createOrderController.handle(req, res);
});

ordersRoutes.patch('/:orderId', (req, res) => {
  return changeOrderStatusController.handle(req, res);
});

ordersRoutes.delete('/:orderId', (req, res) => {
  return cancelOrderController.handle(req, res);
});
