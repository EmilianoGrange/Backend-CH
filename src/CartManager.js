import fs from "fs";

class CartManager {
    constructor(path) {
        this.path = path;
    }

    async createCart() {
        try {
            let file = await fs.promises.readFile(this.path, 'utf8');
            let id;
            let carts = []
            if(file) {
                carts = JSON.parse(file);
                id = carts[carts.length - 1].id + 1;
            }
            else id = 1;
            carts.push({ id, products: [] });
            try {
                await fs.promises.writeFile(this.path, JSON.stringify(carts, null, 2));
                return id;
            }
            catch (err) {
                console.log('Hubo un error de escritura', err)
            }
        }
        catch (err) {
            console.log('Hubo un error de lectura', err)
        };
    }

    async getCartById(id) {
        try {
            let file = await fs.promises.readFile(this.path, 'utf-8');
            if (file) {
                const carts = JSON.parse(file);
                let cart = carts.find(cart => cart.id === id);
                if (cart) {
                    return cart;
                }
                else {
                    console.log(`No existe el carrito con id: ${id}`);
                    return null;
                }
            }
        }
        catch (err) {
            console.log('Hubo un error de lectura', err)
        }
    }

    async saveCart(id, newCart) {
        try {
            let carts = await JSON.parse(s.promises.readFile(this.path, 'utf8'));
            if (file) {
                const index = carts.findIndex(cart => cart.id === id)
                if (index !== -1) {
                    carts.splice(index, 1, newCart);
                } else {
                    console.log(`No existe el carrito con id: ${id}`);
                    return null;
                }
            }
            try {
                await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2));
                return id;
            }
            catch (err) {
                console.log('Hubo un error de escritura', err)
            }
        }
        catch (err) {
            console.log('Hubo un error de lectura', err)
        };
    }

    async deleteCart(id) {
        try {
            let file = await fs.promises.readFile(this.path, 'utf8');
            if (file) {
                const carts = JSON.parse(file);
                const rest = carts.filter(cart => cart.id !== id);
                try {
                    await fs.promises.writeFile(this.path, JSON.stringify(rest, null, 2));
                    return `Se elimino el carrito con id: ${id}`;
                }
                catch (err) {
                    console.log('Hubo un error de escritura', err)
                }
            }
        }
        catch (err) {
            console.log('Hubo un error de lectura', err)
        }
    }
}

export default CartManager;