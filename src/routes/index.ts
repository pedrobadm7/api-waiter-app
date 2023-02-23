import { Router } from 'express';
import { categoriesRoutes } from './categories.routes';
import { ordersRoutes } from './orders.routes';
import { productsRoutes } from './products.routes';
import { restaurantsRoutes } from './restaurants.routes';

export const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/orders', ordersRoutes);
router.use('/products', productsRoutes);
router.use('/restaurants', restaurantsRoutes);
