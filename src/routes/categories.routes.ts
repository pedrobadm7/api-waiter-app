import { Router } from 'express';
import { CreateCategoryController } from '../modules/categories/useCases/createCategory/CreateCategoryController';
import { listCategoriesController } from '../modules/categories/useCases/listCategory';
import { listProductsByCategoryController } from '../modules/categories/useCases/listProductsByCategory';

export const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();

categoriesRoutes.get('/', (req, res) => {
  return listCategoriesController.handle(req, res);
});

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/:categoryId/products', (req, res) => {
  return listProductsByCategoryController.handle(req, res);
});
