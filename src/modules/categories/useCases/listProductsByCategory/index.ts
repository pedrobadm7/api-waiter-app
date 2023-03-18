import { ProductsRepository } from '../../../products/repositories/implementations/ProductsRepository';
import { ListProductsByCategoryController } from './ListProductsByCategoryController';
import { ListProductsByCategoryService } from './ListProductsByCategoryService';

const productsRepository = ProductsRepository.getInstance();
const listProductsByCategoryService = new ListProductsByCategoryService(
  productsRepository
);
const listProductsByCategoryController = new ListProductsByCategoryController(
  listProductsByCategoryService
);

export { listProductsByCategoryController };
