import { Product } from '../models/Product';
import { IProductList, IProductsRepository } from './IProductsRepository';

export class ProductsRepository implements IProductsRepository {
  async listByCategory(categoryId: string): Promise<IProductList[]> {
    const product = await Product.find().where('category').equals(categoryId);

    return product;
  }

  async create({
    name,
    description,
    imagePath,
    price,
    category,
    ingredients,
  }: IProductList): Promise<IProductList> {
    const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: ingredients || [],
    });

    return product;
  }
}
