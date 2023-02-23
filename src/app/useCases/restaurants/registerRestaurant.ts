import { Request, Response } from 'express';
import { Restaurant } from '../../models/Restaurant';
import bcrypt from 'bcrypt';

export async function registerRestaurants(req: Request, res: Response) {
  try {
    const { name, email, password, confirmpassword } = req.body;

    if (!name) {
      return res.status(422).json({ message: 'O nome é obrigatório!' });
    }

    if (!email) {
      return res.status(422).json({ message: 'O email é obrigatório!' });
    }

    if (!password) {
      return res.status(422).json({ message: 'A senha é obrigatória!' });
    }

    if (password !== confirmpassword) {
      return res.status(422).json({ message: 'A senhas não conferem!' });
    }

    const restaurantExists = await Restaurant.findOne({ email: email });

    if (restaurantExists) {
      return res.status(422).json({ message: 'Email já existe!' });
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const restaurant = await Restaurant.create({
      name,
      email,
      password: passwordHash,
    });

    await restaurant.save();

    return res.status(201).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: 'Aconteceu um erro no servidor!' + error });
  }
}
