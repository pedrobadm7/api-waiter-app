import { Request, Response } from 'express';
import { CreateCategoryService } from './CreateCategoryService';

class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { icon, name } = req.body;

      this.createCategoryService.execute({ name, icon });

      return res.status(201).send();
    } catch {
      return res.sendStatus(500);
    }
  }
}

export { CreateCategoryController };
