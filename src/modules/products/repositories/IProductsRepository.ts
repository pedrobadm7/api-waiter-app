import { Document, Types } from 'mongoose';

export interface IProductList extends Document {
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: {
    name: string;
    icon: string;
  }[];
  category: Types.ObjectId;
}

export interface IProductsRepository {
  listByCategory(categoryId: string): Promise<IProductList[]>;
  create({
    name,
    description,
    imagePath,
    price,
    category,
    ingredients,
  }: IProductList): Promise<IProductList>;
  list(): Promise<IProductList[]>;
}
