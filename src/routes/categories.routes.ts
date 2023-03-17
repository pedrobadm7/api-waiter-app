import { Router } from 'express';
import { createCategoryController } from '../modules/categories/useCases/createCategory';

import { ListCategoriesController } from '../modules/categories/useCases/listCategory/ListCategoriesController';
import { ListProductsByCategoryController } from '../modules/categories/useCases/listProductsByCategory/ListProductsByCategoryController';

export const categoriesRoutes = Router();

categoriesRoutes.get('/', ListCategoriesController);

categoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get('/:categoryId/products', ListProductsByCategoryController);
