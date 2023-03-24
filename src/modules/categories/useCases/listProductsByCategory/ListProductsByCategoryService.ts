import { inject, injectable } from 'tsyringe';
import { IProductsRepository } from '../../../products/repositories/IProductsRepository';
@injectable()
class ListProductsByCategoryService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  async execute(categoryId: string) {
    const product = await this.productsRepository.listByCategory(categoryId);

    if (!product) {
      throw new Error('You must provide a valid product');
    }

    return product;
  }
}

export { ListProductsByCategoryService };
