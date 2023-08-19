import { Router } from "express";

import CartManager from '../CartManager.js';

const router = Router();

const cartManager = new CartManager('./data/carts.json');

router.post('/', async (req, res) => {
    const cart = await cartManager.createCart();
    console.log(cart);
});

router.get('/:cid', async (req, res) => {
    let id = parseInt(req.params.cid);
    const cart = await cartManager.getCartById(id);
    console.log(cart)
});

export default router;