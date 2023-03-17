import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoryService } from './ListCategoryService';

const categoriesRepository = new CategoriesRepository();
const listCategoryService = new ListCategoryService(categoriesRepository);
const listCategoryController = new ListCategoriesController(
  listCategoryService
);

export { listCategoryController };
