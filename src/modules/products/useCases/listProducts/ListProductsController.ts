import { Request, Response } from 'express';
import { ListProductsService } from './ListProductsService';

class ListProductsController {
  constructor(private listProductsService: ListProductsService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const products = await this.listProductsService.execute();

    try {
      return res.json(products);
    } catch {
      return res.sendStatus(500);
    }
  }
}

export { ListProductsController };
