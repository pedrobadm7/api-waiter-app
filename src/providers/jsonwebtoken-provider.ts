import jwt, { Secret } from 'jsonwebtoken';
import { Types } from 'mongoose';

export class JsonWebTokenProvider {
  async sign(id: Promise<Types.ObjectId | undefined>, secret: string) {
    return jwt.sign(
      {
        id: id,
      },
      secret as Secret
    );
  }
}
