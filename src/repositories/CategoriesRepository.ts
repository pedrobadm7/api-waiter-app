import { CategoryModel } from '../models/Category';

interface ICreateCategoryDTO {
  name: string;
  icon: string;
}

interface ICategoriesRepository {
  create({ name, icon }: ICreateCategoryDTO): Promise<void>;
}

export class CategoriesRepository implements ICategoriesRepository {
  async create({ name, icon }: ICreateCategoryDTO): Promise<void> {
    const category = await CategoryModel.create({
      icon,
      name,
    });
    await category.save();
  }
}
