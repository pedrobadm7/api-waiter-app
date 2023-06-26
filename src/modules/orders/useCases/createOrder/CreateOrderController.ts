import { Request, Response } from 'express';
import { CreateOrderService } from './CreateOrderService';
import { container } from 'tsyringe';
class CreateOrderController {

  async handle(req: Request, res: Response): Promise<Response> {
    const { table, products } = req.body;

    const createOrderService = container.resolve(CreateOrderService)
    const order = await createOrderService.execute(table, products);

    try {
      return res.status(201).json(order);
    } catch {
      return res.sendStatus(500);
    }
  }
}

export { CreateOrderController };
