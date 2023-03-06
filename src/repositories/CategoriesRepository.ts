/* eslint-disable @typescript-eslint/no-explicit-any */
import { CategoryModel, ICategoryDTO } from '../models/Category';

interface ICategoriesRepository {
  create({ name, icon }: ICategoryDTO): Promise<void>;
  list(): Promise<ICategoryDTO[]>;
}

export class CategoriesRepository implements ICategoriesRepository {
  async create({ name, icon }: ICategoryDTO): Promise<void> {
    const category = await CategoryModel.create({
      icon,
      name,
    });
    await category.save();
  }

  async list(): Promise<ICategoryDTO[]> {
    const categories = await CategoryModel.find();
    return categories;
  }

  async findByName(name: string): Promise<ICategoryDTO[]> {
    const categories = await CategoryModel.find({
      name: { $regex: name, $options: 'i' },
    });
    return categories;
  }
}
