import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCategoriesService } from './ListCategoryService';

class ListCategoriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listCategoriesService = container.resolve(ListCategoriesService);

    try {
      const categories = await listCategoriesService.execute();

      return res.status(200).json(categories);
    } catch {
      return res.sendStatus(500);
    }
  }
}

export { ListCategoriesController };
