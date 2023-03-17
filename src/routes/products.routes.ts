import { Router } from 'express';
import multer from 'multer';
import path from 'node:path';
import { CreateProductController } from '../modules/products/useCases/createProducts/CreateProductsController';
import { ListProductsController } from '../modules/products/useCases/listProducts/ListProductsController';

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

productsRoutes.get('/', ListProductsController);

productsRoutes.post('/', upload.single('image'), CreateProductController);
