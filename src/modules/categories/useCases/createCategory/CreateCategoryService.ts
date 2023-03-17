import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  icon: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, icon }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!');
    }

    if (!name) {
      throw new Error('Name is required!');
    }

    this.categoriesRepository.create({ name, icon });
  }
}

export { CreateCategoryService };
