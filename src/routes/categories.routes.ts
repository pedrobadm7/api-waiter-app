import { Router } from 'express';
import { CreateCategoryController } from '../modules/categories/useCases/createCategory/CreateCategoryController';
import { ListCategoriesController } from '../modules/categories/useCases/listCategory/ListCategoriesController';
import { ListProductsByCategoryController } from '../modules/categories/useCases/listProductsByCategory/ListProductsByCategoryController';

export const categoriesRoutes = Router();

categoriesRoutes.get('/', ListCategoriesController);

categoriesRoutes.post('/', CreateCategoryController);

categoriesRoutes.get('/:categoryId/products', ListProductsByCategoryController);
