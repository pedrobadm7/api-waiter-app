import { Request, Response } from 'express';
import { CategoriesRepository } from '../../repositories/CategoriesRepository';

import { ListCategoryService } from './ListCategoryService';

class ListCategoriesController {
  constructor(private listCategoriesService: ListCategoryService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const categories = await this.listCategoriesService.execute();

      return res.json(categories);
    } catch {
      return res.sendStatus(500);
    }
  }
}

export { ListCategoriesController };
