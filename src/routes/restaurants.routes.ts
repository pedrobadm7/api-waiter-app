import { Router } from 'express';
import { ensureAuthenticated } from '../middleware/ensureAuthenticated';

import { GetRestaurantByIdController } from '../modules/restaurants/useCases/getRestaurantById/GetRestaurantByIdController';
import { LoginRestaurantController } from '../modules/restaurants/useCases/loginRestaurant/LoginRestaurantController'
import { RegisterRestaurantController } from '../modules/restaurants/useCases/registerRestaurant/RegisterRestaurantController';

const getRestaurantByIdController = new GetRestaurantByIdController()
const loginRestaurantController = new LoginRestaurantController();
const registerRestaurantController = new RegisterRestaurantController()

export const restaurantsRoutes = Router();

restaurantsRoutes.post('/register', registerRestaurantController.handle);

restaurantsRoutes.post('/login', loginRestaurantController.handle);

restaurantsRoutes.get('/:id', ensureAuthenticated,getRestaurantByIdController.handle);
