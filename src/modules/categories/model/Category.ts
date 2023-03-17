import { model, Schema } from 'mongoose';
import { ICreateCategoryDTO } from '../repositories/ICategoriesRepository';

const CategorySchema = new Schema<ICreateCategoryDTO>({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

export const CategoryModel = model('Category', CategorySchema);
