import {
  ICategoriesRepository,
  ICategory,
} from '../repositories/ICategoriesRepository';

class ListCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute(): Promise<ICategory[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoryService };
