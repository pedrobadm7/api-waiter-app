import { Request, Response } from 'express';
import { ListOrdersService } from './ListOrdersService';

class ListOrdersController {
  constructor(private listOrdersService: ListOrdersService) {}

  async handle(req: Request, res: Response) {
    const orders = await this.listOrdersService.execute();

    try {
      return res.json(orders);
    } catch {
      return res.sendStatus(500);
    }
  }
}

export { ListOrdersController };
