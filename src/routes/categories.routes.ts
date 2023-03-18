import { Router } from 'express';
import { createCategoryController } from '../modules/categories/useCases/createCategory';
import { listCategoriesController } from '../modules/categories/useCases/listCategory';
import { listProductsByCategoryController } from '../modules/categories/useCases/listProductsByCategory';

export const categoriesRoutes = Router();

categoriesRoutes.get('/', (req, res) => {
  return listCategoriesController.handle(req, res);
});

categoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get('/:categoryId/products', (req, res) => {
  return listProductsByCategoryController.handle(req, res);
});
