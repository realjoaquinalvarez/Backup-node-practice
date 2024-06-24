import { Router } from 'express';
import { body } from'express-validator';
import { createAccount, login } from './handlers';

const router = Router();

router.post('/auth/register', 
    body('handle')
        .notEmpty()
        .withMessage('El handle no puede ir vacio'),
    body('name')
        .notEmpty()
        .withMessage('El name no puede ir vacio'),
    body('email')
        .isEmail()
        .withMessage('El email no es valido'),
    body('password')
        .isLength({min: 8})
        .withMessage('El password debe tener al menos 8 caracteres'),
    createAccount);

router.post('/auth/login', 
    body('email')
        .isEmail()
        .withMessage('El email no es valido'),
    body('password')
        .notEmpty()
        .withMessage('El password es obligatorio'),
    login)
    
    

export default router;

