/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Request, Response } from 'express';
import { IProductList } from '../../repositories/IProductsRepository';

import { CreateProductsService } from './CreateProductsService';

class CreateProductController {
  constructor(private createProductsService: CreateProductsService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients }: IProductList =
      req.body;

    const product = await this.createProductsService.execute({
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
