import express from 'express';

import ProductManager from '../ProductManager.js';

const productManager = new ProductManager('./productos.json');

const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>Server con Express</h1>`);
})

app.get('/products', async (req, res) => {
    const productos = await productManager.getProducts()
    res.send({status: "success", productos})
})

app.get('/products/:pid', async (req, res)=> {
    const productos = await productManager.getProducts()
    let id = parseInt(req.params.pid);
    let buscado = productos.find(p => p.id === id);
    res.send({status: "success", buscado} || {error: 'producto no encontrado'});
});

app.listen(8080, ()=> console.log("Server up!!"))