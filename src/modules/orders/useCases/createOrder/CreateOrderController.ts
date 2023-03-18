import { Request, Response } from 'express';
import { CreateOrderService } from './CreateOrderService';
class CreateOrderController {
  constructor(private createOrderService: CreateOrderService) {}

  async handle(req: Request, res: Response) {
    const { table, products } = req.body;

    const order = await this.createOrderService.execute(table, products);

    try {
      return res.status(201).json(order);
    } catch {
      return res.sendStatus(500);
    }
  }
}

export { CreateOrderController };
