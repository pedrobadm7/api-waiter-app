/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProductList } from '../repositories/IProductsRepository';
import { ProductsRepository } from '../repositories/ProductsRepository';

class CreateProductsService {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    name,
    description,
    imagePath,
    price,
    category,
    ingredients,
  }: IProductList): Promise<IProductList> {
    const product = await this.productsRepository.create({
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients as any) : [],
    } as IProductList);

    return product;
  }
}

export { CreateProductsService };
