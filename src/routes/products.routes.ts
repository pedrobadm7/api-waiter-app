import { Router } from 'express';
import { uploadImage } from '../middleware/uploadImage';
import { createProductsController } from '../modules/products/useCases/createProducts';
import { listProductsController } from '../modules/products/useCases/listProducts';

export const productsRoutes = Router();

productsRoutes.get('/', (req, res) => {
  return listProductsController.handle(req, res);
});

productsRoutes.post('/', uploadImage, (req, res) => {
  return createProductsController.handle(req, res);
});
