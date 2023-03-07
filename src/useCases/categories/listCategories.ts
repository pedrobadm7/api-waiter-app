import { Request, Response } from 'express';
import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ListCategoryService } from '../../services/ListCategoryService';

const categoriesRepository = new CategoriesRepository();

export async function listCategories(req: Request, res: Response) {
  try {
    const listCategoriesService = new ListCategoryService(categoriesRepository);

    const categories = await listCategoriesService.execute();

    res.json(categories);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
