import bcrypt from 'bcrypt';

export class BcryptProvider {
  async compare(passwordSent: string, restaurantPassword: string) {
    return bcrypt.compare(passwordSent, restaurantPassword);
  }

  async generateSalt(saltNumber: number) {
    return bcrypt.genSalt(saltNumber);
  }

  async hashGenerator(password: string, salt: string) {
    return bcrypt.hash(password, salt);
  }
}
