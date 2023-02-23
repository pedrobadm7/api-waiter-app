import { Router } from 'express';
import multer from 'multer';
import path from 'node:path';
import { createProduct } from '../useCases/products/createProducts';
import { listProducts } from '../useCases/products/listProducts';

export const productsRoutes = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(request, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

productsRoutes.get('/', listProducts);

productsRoutes.post('/', upload.single('image'), createProduct);
