import jwt from 'jsonwebtoken';
import ITokenData from '../interfaces/TokenData';

const jwtConfig = { expiresIn: '1d' };

export default (data: ITokenData) => jwt.sign({ data }, 'SECRET', jwtConfig);