import { Router } from 'express';
import { cancelOrderController } from '../modules/orders/useCases/cancelOrder';


import { ListOrdersController } from '../modules/orders/useCases/listOrders/ListOrdersController';
import { CreateOrderController } from '../modules/orders/useCases/createOrder/CreateOrderController';
import { ChangeOrderStatusController } from '../modules/orders/useCases/changeOrderStatus/ChangeOrderStatusController';

const listOrdersController = new ListOrdersController()
const createOrderController = new CreateOrderController()
const changeOrderStatusController = new ChangeOrderStatusController()

export const ordersRoutes = Router();

ordersRoutes.get('/', listOrdersController.handle);

ordersRoutes.post('/', createOrderController.handle);

ordersRoutes.patch('/:orderId', changeOrderStatusController.handle);

ordersRoutes.delete('/:orderId', (req, res) => {
  return cancelOrderController.handle(req, res);
});
