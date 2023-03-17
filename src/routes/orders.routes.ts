import { Router } from 'express';
import { CancelOrderController } from '../modules/orders/useCases/cancelOrder/CancelOrderController';
import { ChangeOrderStatusController } from '../modules/orders/useCases/changeOrderStatus/ChangeOrderStatusController';
import { CreateOrderController } from '../modules/orders/useCases/createOrder/CreateOrderController';
import { ListOrdersController } from '../modules/orders/useCases/listOrders/ListOrdersController';

export const ordersRoutes = Router();

ordersRoutes.get('/', ListOrdersController);

ordersRoutes.post('/', CreateOrderController);

ordersRoutes.patch('/:orderId', ChangeOrderStatusController);

ordersRoutes.delete('/:orderId', CancelOrderController);
