import { Router } from 'express';
import { cancelOrder } from '../useCases/orders/cancelOrder';
import { changeOrderStatus } from '../useCases/orders/changeOrderStatus';
import { createOrder } from '../useCases/orders/createOrder';
import { listOrders } from '../useCases/orders/listOrders';

export const ordersRoutes = Router();

ordersRoutes.get('/', listOrders);

ordersRoutes.post('/', createOrder);

ordersRoutes.patch('/:orderId', changeOrderStatus);

ordersRoutes.delete('/:orderId', cancelOrder);
