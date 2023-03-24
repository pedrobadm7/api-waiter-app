import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCategoryService } from './CreateCategoryService';

class CreateCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { icon, name } = req.body;
    const createCategoryService = container.resolve(CreateCategoryService);

    try {
      createCategoryService.execute({ name, icon });
      return res.status(201).send();
    } catch {
      return res.sendStatus(500);
    }
  }
}

export { CreateCategoryController };
