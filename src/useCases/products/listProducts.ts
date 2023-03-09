import { Request, Response } from 'express';
import { ProductsRepository } from '../../repositories/ProductsRepository';
import { ListProductsService } from '../../services/ListProductsService';

const productsRepository = new ProductsRepository();

export async function listProducts(req: Request, res: Response) {
  try {
    const listProductsService = new ListProductsService(productsRepository);

    const products = await listProductsService.execute();

    res.json(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
