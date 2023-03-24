import { Router } from 'express';
import { uploadImage } from '../middleware/uploadImage';
import { CreateProductController } from '../modules/products/useCases/createProducts/CreateProductsController';
import { ListProductsController } from '../modules/products/useCases/listProducts/ListProductsController';

export const productsRoutes = Router();

const createProductsController = new CreateProductController();
const listProductsController = new ListProductsController();

productsRoutes.get('/', listProductsController.handle);

productsRoutes.post('/', uploadImage, createProductsController.handle);
