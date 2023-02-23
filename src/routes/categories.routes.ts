import { Router } from 'express';
import { createCategory } from '../useCases/categories/createCategory';
import { listCategories } from '../useCases/categories/listCategories';
import { listProductsByCategory } from '../useCases/categories/listProductsByCategory';

export const categoriesRoutes = Router();

categoriesRoutes.get('/', listCategories);

categoriesRoutes.post('/', createCategory);

categoriesRoutes.get('/:categoryId/products', listProductsByCategory);
