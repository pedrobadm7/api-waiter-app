/* eslint-disable @typescript-eslint/no-explicit-any */
import { CategoryModel } from '../models/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

export class CategoriesRepository implements ICategoriesRepository {
  async create({ name, icon }: ICreateCategoryDTO): Promise<void> {
    const category = await CategoryModel.create({
      icon,
      name,
    });
    await category.save();
  }

  async list(): Promise<ICreateCategoryDTO[]> {
    const categories = await CategoryModel.find();
    return categories;
  }

  async findByName(name: string): Promise<ICreateCategoryDTO | null> {
    const categories = await CategoryModel.findOne({
      name: { $regex: name, $options: 'i' },
    });

    return categories;
  }
}
