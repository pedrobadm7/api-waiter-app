/* eslint-disable @typescript-eslint/no-explicit-any */

import { CategoryModel } from '../../model/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

export class CategoriesRepository implements ICategoriesRepository {
  private static INSTANCE: CategoriesRepository;

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

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
