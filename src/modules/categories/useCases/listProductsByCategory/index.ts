import { ProductsRepository } from '../../../products/repositories/ProductsRepository';
import { ListProductsByCategoryController } from './ListProductsByCategoryController';
import { ListProductsByCategoryService } from './ListProductsByCategoryService';

const productsRepository = new ProductsRepository();
const listProductsByCategoryService = new ListProductsByCategoryService(
  productsRepository
);
const listProductsByCategoryController = new ListProductsByCategoryController(
  listProductsByCategoryService
);

export { listProductsByCategoryController };
