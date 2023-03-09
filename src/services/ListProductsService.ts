import { IProductsRepository } from '../repositories/IProductsRepository';

class ListProductsService {
  constructor(private productsRepository: IProductsRepository) {}

  async execute() {
    const products = await this.productsRepository.list();

    return products;
  }
}

export { ListProductsService };
