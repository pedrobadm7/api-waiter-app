import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListProductsService } from './ListProductsService';

class ListProductsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listProductsService = container.resolve(ListProductsService);
    const products = await listProductsService.execute();

    try {
      return res.json(products);
    } catch {
      return res.sendStatus(500);
    }
  }
}

export { ListProductsController };
