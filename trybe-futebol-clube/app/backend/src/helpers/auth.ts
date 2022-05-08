import { readFileSync } from 'fs';
import * as jwt from 'jsonwebtoken';
import Itoken from '../interface/Itoken';

const SECRET = readFileSync('jwt.evaluation.key', 'utf8');

const options = {
  expiresIn: '7d',
};

const generateToken = (data: Itoken): string => (
  jwt.sign(
    { data },
    SECRET,
    options,
  )
);

export default generateToken;
