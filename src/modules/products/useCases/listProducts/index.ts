import { ProductsRepository } from '../../repositories/implementations/ProductsRepository';
import { ListProductsController } from './ListProductsController';
import { ListProductsService } from './ListProductsService';

const productsRepository = new ProductsRepository();
const listProductsService = new ListProductsService(productsRepository);
const listProductsController = new ListProductsController(listProductsService);

export { listProductsController };
