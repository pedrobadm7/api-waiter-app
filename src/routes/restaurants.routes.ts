import { Router } from 'express';
import { ensureAuthenticated } from '../middleware/ensureAuthenticated';
import { GetRestaurantByIdController } from '../modules/restaurants/useCases/getRestaurantById/GetRestaurantByIdController';
import { LoginRestaurantController } from '../modules/restaurants/useCases/loginRestaurant/LoginRestaurantController';
import { RegisterRestaurantsController } from '../modules/restaurants/useCases/registerRestaurant/RegisterRestaurantController';

export const restaurantsRoutes = Router();

restaurantsRoutes.post('/register', RegisterRestaurantsController);

restaurantsRoutes.post('/login', LoginRestaurantController);

restaurantsRoutes.get('/:id', ensureAuthenticated, GetRestaurantByIdController);
