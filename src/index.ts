import colors from 'colors'
import server from './server'

const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(colors.blue.bold(`Hola mundo en consola, desde el puerto, ${port}`));
});

type Product = {
    id: number;
    price: number;
    name: string;
}

let productname = 'Tablet';
let isAuth = false;
let price = 30;

let product : Product = {
    id: 1,
    price: 30,
    name: 'Tablet'
};

let product2 : Product = {
    id: 1,
    price: 30,
    name: 'Tablet'
};

const numbers = [10, 20, 30];

