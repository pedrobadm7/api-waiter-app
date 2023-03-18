import { Request, Response } from 'express';
import { CreateCategoryService } from './CreateCategoryService';

class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { icon, name } = req.body;

    try {
      this.createCategoryService.execute({ name, icon });
      return res.status(200).send();
    } catch {
      console.log('aqui');
      return res.sendStatus(500);
    }
  }
}

export { CreateCategoryController };
