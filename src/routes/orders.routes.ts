import { Router } from 'express';

import { ListOrdersController } from '../modules/orders/useCases/listOrders/ListOrdersController';
import { CreateOrderController } from '../modules/orders/useCases/createOrder/CreateOrderController';
import { ChangeOrderStatusController } from '../modules/orders/useCases/changeOrderStatus/ChangeOrderStatusController';
import { CancelOrderController } from '../modules/orders/useCases/cancelOrder/CancelOrderController';

const listOrdersController = new ListOrdersController()
const createOrderController = new CreateOrderController()
const changeOrderStatusController = new ChangeOrderStatusController()
const cancelOrderController = new CancelOrderController()

export const ordersRoutes = Router();

ordersRoutes.get('/', listOrdersController.handle);

ordersRoutes.post('/', createOrderController.handle);

ordersRoutes.patch('/:orderId', changeOrderStatusController.handle);

ordersRoutes.delete('/:orderId', cancelOrderController.handle);
