import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListProductsByCategoryService } from './ListProductsByCategoryService';

class ListProductsByCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listProductsByCategoryService = container.resolve(
      ListProductsByCategoryService
    );
    try {
      const { categoryId } = req.params;

      const products = await listProductsByCategoryService.execute(categoryId);

      return res.json(products);
    } catch {
      return res.sendStatus(500);
    }
  }
}

export { ListProductsByCategoryController };
