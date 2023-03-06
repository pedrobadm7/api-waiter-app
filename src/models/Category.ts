import { model, Schema } from 'mongoose';

export interface ICategoryDTO {
  name: string;
  icon: string;
}

const CategorySchema = new Schema<ICategoryDTO>({
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
