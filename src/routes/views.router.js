import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    const user = {nombre: "Milo"}; //tengo que pasar un objeto, y renderizo alguna/s propiedad/es
    res.render('index', user);
});

export default router;