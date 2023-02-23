import { NextFunction, Request, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers['authorization'];

  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Acesso negado' });
  }

  try {
    const secret = process.env.SECRET;
    jwt.verify(token, secret as Secret);

    next();
  } catch {
    res.status(400).json({ message: 'Tokenb invalido' });
  }
}
