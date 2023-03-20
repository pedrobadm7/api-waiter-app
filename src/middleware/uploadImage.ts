import { NextFunction, Request, Response } from 'express';
import multer from 'multer';
import path from 'node:path';

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

export function uploadImage(req: Request, res: Response, next: NextFunction) {
  upload.single('image')(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    return next();
  });
}
