import { inject, injectable } from 'tsyringe';
import {
  ICategoriesRepository,
  ICategory,
} from '../../repositories/ICategoriesRepository';

@injectable()
class ListCategoriesService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(): Promise<ICategory[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesService };
