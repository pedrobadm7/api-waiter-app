import { container } from 'tsyringe';
import { ICategoriesRepository } from '../../modules/categories/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/categories/repositories/implementations/CategoriesRepository';
import { ProductsRepository } from '../../modules/products/repositories/implementations/ProductsRepository';
import { IProductsRepository } from '../../modules/products/repositories/IProductsRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
);

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository
);
