import { Request, Response } from 'express';
import { ChangeOrderStatusService } from './ChangeOrderStatusService';

class ChangeOrderStatusController {
  constructor(private changeOrderStatusService: ChangeOrderStatusService) {}

  async handle(req: Request, res: Response) {
    try {
      const { orderId } = req.params;
      const { status } = req.body;

      await this.changeOrderStatusService.execute(orderId, status);

      return res.sendStatus(204);
    } catch {
      return res.sendStatus(500);
    }
  }
}

export { ChangeOrderStatusController };
