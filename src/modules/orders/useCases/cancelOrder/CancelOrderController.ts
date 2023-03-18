import { Request, Response } from 'express';

import { CancelOrderService } from './CancelOrderService';

class CancelOrderController {
  constructor(private cancelOrderService: CancelOrderService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { orderId } = req.params;

      await this.cancelOrderService.execute(orderId);

      return res.sendStatus(204);
    } catch {
      return res.sendStatus(500);
    }
  }
}

export { CancelOrderController };
