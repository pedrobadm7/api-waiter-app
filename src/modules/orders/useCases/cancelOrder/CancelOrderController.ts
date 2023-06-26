import { Request, Response } from 'express';

import { CancelOrderService } from './CancelOrderService';
import { container } from 'tsyringe';

class CancelOrderController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { orderId } = req.params;

      const cancelOrderService = container.resolve(CancelOrderService)
      await cancelOrderService.execute(orderId);

      return res.sendStatus(204);
    } catch {
      return res.sendStatus(500);
    }
  }
}

export { CancelOrderController };
