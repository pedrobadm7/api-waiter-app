import { Router } from 'express';
import { ensureAuthenticated } from '../middleware/ensureAuthenticated';
import { getRestaurantByIdController } from '../modules/restaurants/useCases/getRestaurantById';
import { loginRestaurantController } from '../modules/restaurants/useCases/loginRestaurant';
import { registerRestaurantController } from '../modules/restaurants/useCases/registerRestaurant';


export const restaurantsRoutes = Router();

restaurantsRoutes.post('/register', (req, res) => {
  return registerRestaurantController.handle(req, res);
});

restaurantsRoutes.post('/login', (req, res) => {
  return loginRestaurantController.handle(req, res);
});

restaurantsRoutes.get('/:id', ensureAuthenticated, (req, res) => {
  return getRestaurantByIdController.handle(req, res);
});
