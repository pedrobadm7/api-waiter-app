import { Request, Response } from 'express';
import { ProductsRepository } from '../../../products/repositories/ProductsRepository';

import { ListProductsByCategoryService } from './ListProductsByCategoryService';

const productsRepository = new ProductsRepository();

export async function ListProductsByCategoryController(
  req: Request,
  res: Response
) {
  try {
    const { categoryId } = req.params;

    const listProductsByCategoryService = new ListProductsByCategoryService(
      productsRepository
    );

    const products = await listProductsByCategoryService.execute(categoryId);

    res.json(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
