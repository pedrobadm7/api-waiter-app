/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  IProductList,
  IProductsRepository,
} from '../../repositories/IProductsRepository';

class CreateProductsService {
  constructor(private productsRepository: IProductsRepository) {}

  async execute({
    name,
    description,
    imagePath,
    price,
    category,
    ingredients,
  }: IProductList): Promise<IProductList> {
    const productAlreadyExists =
      await this.productsRepository.findProductByName(name);

    if (productAlreadyExists) {
      throw new Error('Product already exists!');
    }

    if (!name) {
      throw new Error('Name is required');
    }

    if (!description) {
      throw new Error('Description is required');
    }

    if (!price) {
      throw new Error('Price is required');
    }

    if (!category) {
      throw new Error('Category is required');
    }

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
