import { ProductsRepository } from '../repositories/ProductsRepository';

class ListProductsByCategoryService {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(categoryId: string) {
    const product = await this.productsRepository.listByCategory(categoryId);

    return product;
  }
}

export { ListProductsByCategoryService };
