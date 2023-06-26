import { container } from 'tsyringe';
import { ICategoriesRepository } from '../../modules/categories/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/categories/repositories/implementations/CategoriesRepository';
import { ProductsRepository } from '../../modules/products/repositories/implementations/ProductsRepository';
import { IProductsRepository } from '../../modules/products/repositories/IProductsRepository';
import { IOrdersRepository } from '../../modules/orders/repositories/IOrdersRepository';
import { OrderRepository } from '../../modules/orders/repositories/implementations/OrdersRepository';
import { IRestaurantsRepository } from '../../modules/restaurants/repositories/IRestaurantsRepository';
import { RestaurantsRepository } from '../../modules/restaurants/repositories/implementations/RestaurantsRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
);

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository
);

container.registerSingleton<IOrdersRepository>(
  'OrderRepository',
  OrderRepository
)

container.registerSingleton<IRestaurantsRepository>(
  'RestaurantsRepository',
  RestaurantsRepository
)
