import { Router } from 'express';
import { CreateCategoryController } from '../modules/categories/useCases/createCategory/CreateCategoryController';

import { ListCategoriesController } from '../modules/categories/useCases/listCategory/ListCategoriesController';
import { ListProductsByCategoryController } from '../modules/categories/useCases/listProductsByCategory/ListProductsByCategoryController';

export const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const listProductsByCategoryController = new ListProductsByCategoryController();

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get(
  '/:categoryId/products',
  listProductsByCategoryController.handle
);
