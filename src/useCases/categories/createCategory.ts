import { Request, Response } from 'express';
import { CategoriesRepository } from '../../repositories/CategoriesRepository';

const categoriesRepository = new CategoriesRepository();

export async function createCategory(req: Request, res: Response) {
  try {
    const { icon, name } = req.body;

    const categoryAlreadyExists = await categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      return res.status(400).json({ error: 'Category Already Exists!' });
    }

    if (!name) {
      return res.send(400).json({
        error: 'Name is required',
      });
    }

    categoriesRepository.create({ name, icon });

    res.status(201).send();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
