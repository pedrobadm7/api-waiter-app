import { IProductsRepository } from '../repositories/IProductsRepository';

class ListProductsByCategoryService {
  constructor(private productsRepository: IProductsRepository) {}

  async execute(categoryId: string) {
    const product = await this.productsRepository.listByCategory(categoryId);

    return product;
  }
}

export { ListProductsByCategoryService };
