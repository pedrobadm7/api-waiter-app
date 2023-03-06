import { Request, Response } from 'express';
import { CategoriesRepository } from '../../repositories/CategoriesRepository';

const categoriesRepository = new CategoriesRepository();

export async function listCategories(req: Request, res: Response) {
  try {
    const categories = await categoriesRepository.list();

    res.json(categories);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
