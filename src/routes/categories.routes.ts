import { Router } from 'express';
import { createCategoryController } from '../modules/categories/useCases/createCategory';
import { listCategoryController } from '../modules/categories/useCases/listCategory';
import { ListProductsByCategoryController } from '../modules/categories/useCases/listProductsByCategory/ListProductsByCategoryController';

export const categoriesRoutes = Router();

categoriesRoutes.get('/', (req, res) => {
  return listCategoryController.handle(req, res);
});

categoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get('/:categoryId/products', ListProductsByCategoryController);
