import { Router } from 'express';
import LoginController from '../controller/login';
import AuthMiddleware from '../middleware/auth.middleware';
import loginValidate from '../middleware/loginValidate';

const routerLogin = Router();

routerLogin.post('/', loginValidate, LoginController.create);
routerLogin.get('/validate', AuthMiddleware, LoginController.validate);

export default routerLogin;
