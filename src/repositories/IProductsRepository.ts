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
}
