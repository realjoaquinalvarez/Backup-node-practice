import { Request, Response } from 'express';
import slugify from 'slugify';
import User from "../models/User";
import { hashPassword } from '../utils/auth';

export const createAccount = async(req: Request, res: Response) => {

    const { email, password } = req.body;

    const userExists = await User.findOne({email});
    if(userExists){
        const error = new Error('El correo ya esta en registrado');
        res.status(409).json({error : error.message});
        return;
    }

    const handle = slugify(req.body.handle, {
        lower: true,    
        trim: true,    
        replacement: '' 
    });

    const handleExist = await User.findOne({handle});
    if(handleExist){
        const error = new Error('El nombre de usuario ya esta en uso');
        res.status(409).json({error : error.message});
        return;
    }
    
    const user = new User(req.body);
    user.password = await hashPassword(password);
    user.handle = handle;
    await user.save();
    res.status(201).send('Registro creado correctamente');
};  
