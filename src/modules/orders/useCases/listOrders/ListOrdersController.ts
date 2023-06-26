import { Request, Response } from 'express';
import { ListOrdersService } from './ListOrdersService';
import { container } from 'tsyringe';

class ListOrdersController {

  async handle(req: Request, res: Response): Promise<Response> {
    const listOrdersService = container.resolve(ListOrdersService)

    const orders = await listOrdersService.execute();

    try {
      return res.json(orders);
    } catch {
      return res.sendStatus(500);
    }
  }
}

export { ListOrdersController };
