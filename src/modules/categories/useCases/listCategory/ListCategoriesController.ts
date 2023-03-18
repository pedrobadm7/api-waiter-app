import { Request, Response } from 'express';

import { ListCategoriesService } from './ListCategoryService';

class ListCategoriesController {
  constructor(private listCategoriesService: ListCategoriesService) {}

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
