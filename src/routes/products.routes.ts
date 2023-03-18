import { Router } from 'express';
import multer from 'multer';
import path from 'node:path';
import { createProductsController } from '../modules/products/useCases/createProducts';
import { listProductsController } from '../modules/products/useCases/listProducts';

export const productsRoutes = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', '..', 'uploads'));
    },
    filename(request, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

productsRoutes.get('/', (req, res) => {
  return listProductsController.handle(req, res);
});

productsRoutes.post('/', upload.single('image'), (req, res) => {
  return createProductsController.handle(req, res);
});
