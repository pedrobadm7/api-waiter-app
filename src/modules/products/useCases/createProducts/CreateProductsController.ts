/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { IProductList } from '../../repositories/IProductsRepository';

import { CreateProductsService } from './CreateProductsService';

class CreateProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients }: IProductList =
      req.body;

    const createProductsService = container.resolve(CreateProductsService);

    const product = await createProductsService.execute({
      name,
      description,
      imagePath,
      price,
      category,
      ingredients,
    } as IProductList);

    try {
      return res.status(201).json(product);
    } catch {
      return res.sendStatus(500);
    }
  }
}

export { CreateProductController };
