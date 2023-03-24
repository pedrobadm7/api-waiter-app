import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoriesService } from './ListCategoryService';

const categoriesRepository = new CategoriesRepository();
const listCategoryService = new ListCategoriesService(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoryService
);

export { listCategoriesController };
