import { Request, Response } from 'express';
import { ProductsRepository } from '../../repositories/ProductsRepository';
import { ListProductsByCategoryService } from '../../services/ListProductsByCategoryService';

const productsRepository = new ProductsRepository();

export async function listProductsByCategory(req: Request, res: Response) {
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
