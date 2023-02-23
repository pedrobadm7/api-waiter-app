import { Router } from 'express';
import { cancelOrder } from '../app/useCases/orders/cancelOrder';
import { changeOrderStatus } from '../app/useCases/orders/changeOrderStatus';
import { createOrder } from '../app/useCases/orders/createOrder';
import { listOrders } from '../app/useCases/orders/listOrders';

export const ordersRoutes = Router();

ordersRoutes.get('/', listOrders);

ordersRoutes.post('/', createOrder);

ordersRoutes.patch('/:orderId', changeOrderStatus);

ordersRoutes.delete('/:orderId', cancelOrder);
