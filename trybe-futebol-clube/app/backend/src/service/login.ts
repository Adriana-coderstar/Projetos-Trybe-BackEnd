import * as bcryptjs from 'bcryptjs';
import User from '../database/models/User';
import generateToken from '../helpers/auth';

export default class LoginService {
  public static async create(email: string, password:string) {
    const foundUser = await User.findOne({
      where: { email },
    });

    if (!foundUser) {
      return { code: 401, message: 'User not found' };
    }

    if (!bcryptjs.compare(password, foundUser.password)) {
      return { code: 400, message: 'Incorret email or password' };
    }

    const { id, username, role } = foundUser;
    const token = generateToken({ id, username, role });

    return { user: { id, username, role, email }, token };
  }
}
