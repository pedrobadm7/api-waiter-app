import { Request, Response } from 'express';
import { ListProductsByCategoryService } from './ListProductsByCategoryService';

class ListProductsByCategoryController {
  constructor(
    private listProductsByCategoryService: ListProductsByCategoryService
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { categoryId } = req.params;

      const products = await this.listProductsByCategoryService.execute(
        categoryId
      );

      return res.json(products);
    } catch {
      return res.sendStatus(500);
    }
  }
}

export { ListProductsByCategoryController };
