import { Router } from 'express';

import userController from '../controllers/userController';
import userValidate from '../middlewares/userValidate';

const userRoutes = Router();

userRoutes.post('/', userValidate, userController.addUser);

export default userRoutes;