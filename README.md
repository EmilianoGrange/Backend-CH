# Backend-CH

Dependencia: express
npm run dev para ejecutar
puerto 8080
carpeta data con json de productos y carritos
carpeta routes con 2 routers, productos y carritos
CartManager y ProductManager

http://localhost:8080 => raiz; index en carpeta estatica public
GET productos
http://localhost:8080/api/products => todos los productos
http://localhost:8080/api/products?limit=2 => limitar la cantidad de productos mostrados
http://localhost:8080/api/products/3 => obtener un producto por id

POST/PUT/DELETE productos (postman/thunder client)
(post) http://localhost:8080/api/products => para cargar un nuevo producto (en el body indicar las propiedades; valida las obligatorias)
(put) http://localhost:8080/api/products/4 => para modificar algun producto; por body recibe los cambios, no permite modificar el id
(delete) http://localhost:8080/api/products/4 => para eliminar un producto del json

Carritos
(post) http://localhost:8080/api/carts => genera un nuevo carrito
(get) http://localhost:8080/api/carts/1 => retorna el array de productos en el carrito indicado
(post)  http://localhost:8080/api/carts/1/product/2 => para agregar un producto a algun carrito (se acumula cantidad si ya esta ese producto)
(delete) http://localhost:8080/api/carts/1 => se elimina el carrito
