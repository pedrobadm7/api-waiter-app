import { Router } from 'express';
import { ensureAuthenticated } from '../app/middleware/ensureAuthenticated';
import { getRestaurantById } from '../app/useCases/restaurants/getRestaurantById';
import { loginRestaurant } from '../app/useCases/restaurants/loginRestaurant';
import { registerRestaurants } from '../app/useCases/restaurants/registerRestaurant';

export const restaurantsRoutes = Router();

restaurantsRoutes.post('/register', registerRestaurants);

restaurantsRoutes.post('/login', loginRestaurant);

restaurantsRoutes.get('/:id', ensureAuthenticated, getRestaurantById);
