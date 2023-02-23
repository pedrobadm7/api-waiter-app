import { Request, Response } from 'express';
import { CategoryModel } from '../../models/Category';

export async function listCategories(req: Request, res: Response) {
  try {
    const categories = await CategoryModel.find();

    res.json(categories);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
