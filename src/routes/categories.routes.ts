import { Router } from 'express';
import { CreateCategoryController } from '../modules/categories/useCases/createCategory/CreateCategoryController';

import { ListCategoriesController } from '../modules/categories/useCases/listCategory/ListCategoriesController';
import { listProductsByCategoryController } from '../modules/categories/useCases/listProductsByCategory';

export const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/:categoryId/products', (req, res) => {
  return listProductsByCategoryController.handle(req, res);
});
