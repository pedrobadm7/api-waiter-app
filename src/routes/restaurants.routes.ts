import { Router } from 'express';
import { ensureAuthenticated } from '../middleware/ensureAuthenticated';
import { getRestaurantById } from '../useCases/restaurants/getRestaurantById';
import { loginRestaurant } from '../useCases/restaurants/loginRestaurant';
import { registerRestaurants } from '../useCases/restaurants/registerRestaurant';

export const restaurantsRoutes = Router();

restaurantsRoutes.post('/register', registerRestaurants);

restaurantsRoutes.post('/login', loginRestaurant);

restaurantsRoutes.get('/:id', ensureAuthenticated, getRestaurantById);
