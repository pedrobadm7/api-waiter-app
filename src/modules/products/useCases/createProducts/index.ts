import { ProductsRepository } from '../../repositories/implementations/ProductsRepository';
import { CreateProductController } from './CreateProductsController';
import { CreateProductsService } from './CreateProductsService';

const productsRepository = new ProductsRepository();
const createProductsService = new CreateProductsService(productsRepository);
const createProductsController = new CreateProductController(
  createProductsService
);

export { createProductsController };
