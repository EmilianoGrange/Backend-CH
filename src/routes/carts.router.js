import { Router } from "express";

import CartManager from '../CartManager.js';

const router = Router();

const cartManager = new CartManager('./data/carts.json');

router.post('/', async (req, res) => {
    const id = await cartManager.createCart();
    res.json({status: "success", id});
});

router.get('/:cid', async (req, res) => {
    let id = parseInt(req.params.cid);
    const cart = await cartManager.getCartById(id);
    if(!cart) return res.status(404).json({status: "error", error: "no existe ese carrito"});
    res.json({status: "success", cart});
});

export default router;