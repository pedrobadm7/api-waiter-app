import { Request, Response } from 'express';
import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { CreateCategoryService } from '../../services/CreateCategoryService';

const categoriesRepository = new CategoriesRepository();

export async function createCategory(req: Request, res: Response) {
  try {
    const { icon, name } = req.body;

    const createCategoryService = new CreateCategoryService(
      categoriesRepository
    );

    createCategoryService.execute({ name, icon });

    res.status(201).send();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
