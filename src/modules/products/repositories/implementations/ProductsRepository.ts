import { Product } from '../../model/Product';
import { IProductList, IProductsRepository } from '../IProductsRepository';

export class ProductsRepository implements IProductsRepository {
  private static INSTANCE: ProductsRepository;

  async listByCategory(categoryId: string): Promise<IProductList[]> {
    const product = await Product.find().where('category').equals(categoryId);

    return product;
  }

  async findProductByName(name: string): Promise<IProductList | null> {
    const product = Product.findOne({
      name: { $regex: name, $options: 'i' },
    });

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

  async list(): Promise<IProductList[]> {
    const products = await Product.find();
    return products;
  }
}
