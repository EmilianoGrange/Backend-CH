import { Router } from "express";

import ProductManager from '../ProductManager.js';

const router = Router();

const productManager = new ProductManager('./data/productos.json');

router.get('/', async (req, res) => {
    const limit = req.query.limit;
    const productos = await productManager.getProducts();
    if(limit>0 && limit < productos.length) return res.json({status: "success", productos: productos.slice(0,limit)});
    res.json({status: "success", productos});
})

router.get('/:pid', async (req, res)=> {
    const productos = await productManager.getProducts();
    let id = parseInt(req.params.pid);
    let buscado = productos.find(p => p.id === id);
    if(!buscado) return res.status(404).json({status: "error", error: "producto no encontrado"});
    res.json({status: "success", buscado});
});

export default router;