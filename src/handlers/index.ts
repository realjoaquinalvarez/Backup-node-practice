import { Request, Response } from 'express';
import User from "../models/User";

export const createAccount = async(req : Request, res : Response) => {
    const { email } = req.body;

    console.log( email )

    return;
    
    const user = new User(req.body);
    
    await user.save();

    res.send('Registro creado correctamente');
}
