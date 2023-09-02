import { Router } from 'express';
import ProductManager from '../ProductManager.js';

const router = Router();

const productManager = new ProductManager('./data/productos.json');

router.get('/', async (req, res) => {
    //const user = {nombre: "Milo"}; //tengo que pasar un objeto, y renderizo alguna/s propiedad/es
    //res.render('index', user);
    const products = await productManager.getProducts();
    res.render('home', {products});
});

router.get('/realtimeproducts', async (req, res) => {
    const products = await productManager.getProducts();
    res.render('realTimeProducts', { products });
});

export default router;