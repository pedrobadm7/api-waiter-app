import {
  ICategoriesRepository,
  ICategory,
} from '../../repositories/ICategoriesRepository';

class ListCategoriesService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute(): Promise<ICategory[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesService };
