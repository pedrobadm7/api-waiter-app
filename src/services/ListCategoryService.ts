import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { ICategory } from '../repositories/ICategoriesRepository';

class ListCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute(): Promise<ICategory[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoryService };
