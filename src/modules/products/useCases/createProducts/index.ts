import { ProductsRepository } from '../../repositories/implementations/ProductsRepository';
import { CreateProductController } from './CreateProductsController';
import { CreateProductsService } from './CreateProductsService';

const productsRepository = ProductsRepository.getInstance();
const createProductsService = new CreateProductsService(productsRepository);
const createProductsController = new CreateProductController(
  createProductsService
);

export { createProductsController };
