import { Request, Response } from 'express';
import { ChangeOrderStatusService } from './ChangeOrderStatusService';
import { container } from 'tsyringe';

class ChangeOrderStatusController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const changeOrderStatusService = container.resolve(ChangeOrderStatusService)
      const { orderId } = req.params;
      const { status } = req.body;

      await changeOrderStatusService.execute(orderId, status);

      return res.sendStatus(204);
    } catch {
      return res.sendStatus(500);
    }
  }
}

export { ChangeOrderStatusController };
