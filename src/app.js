import express from 'express';

import productRouter from './routes/products.router.js';

import cartRouter from './routes/carts.router.js';

const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
    res.send(`<h1>Server con Express</h1>`);
})

app.use('/api/products', productRouter);

app.use('/api/carts', cartRouter);

app.listen(8080, ()=> console.log('Server listening on port 8080'));