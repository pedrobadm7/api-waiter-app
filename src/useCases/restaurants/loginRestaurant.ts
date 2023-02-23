import { Request, Response } from 'express';
import { Restaurant } from '../../models/Restaurant';
import bcrypt from 'bcrypt';
import jwt, { Secret } from 'jsonwebtoken';

export async function loginRestaurant(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(422).json({ message: 'O email é obrigatório!' });
    }

    if (!password) {
      return res.status(422).json({ message: 'A senha é obrigatória!' });
    }

    const restaurant = await Restaurant.findOne({ email: email });

    if (!restaurant) {
      return res.status(404).json({ message: 'Email ou senha inválidos!' });
    }

    const checkPassword = await bcrypt.compare(password, restaurant.password);

    if (!checkPassword) {
      return res.status(404).json({ message: 'Email ou senha inválidos!' });
    }

    const secret = process.env.SECRET;

    const token = jwt.sign(
      {
        id: restaurant._id,
      },
      secret as Secret
    );

    res.status(200).json(token);
  } catch (error) {
    res.status(500).json({ message: 'Aconteceu um erro no servidor!' + error });
  }
}
