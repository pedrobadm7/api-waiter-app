import { Product } from '../models/Product';
import { IProductList, IProductsRepository } from './IProductsRepository';

export class ProductsRepository implements IProductsRepository {
  async listByCategory(categoryId: string): Promise<IProductList[]> {
    const product = await Product.find().where('category').equals(categoryId);

    return product;
  }
}
