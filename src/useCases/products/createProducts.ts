/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Request, Response } from 'express';
import { IProductList } from '../../repositories/IProductsRepository';
import { ProductsRepository } from '../../repositories/ProductsRepository';
import { CreateProductsService } from '../../services/CreateProductsService';

const productsRepository = new ProductsRepository();

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients }: IProductList =
      req.body;

    const createProductsService = new CreateProductsService(productsRepository);

    const product = await createProductsService.execute({
      name,
      description,
      imagePath,
      price,
      category,
      ingredients,
    } as IProductList);

    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
