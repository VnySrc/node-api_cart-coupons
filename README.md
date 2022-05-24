# node-api_cart-coupons
***Projeto desenvolvimento de Api de Carrinho de Compras com Crud de Produtosn Cupons e Calculo de Descontos Baseado nos Cupons Ultilizados no Carrinho.***
<br />
**RESTful** <br />
**MVC** <br />

**Install** <br />
npm install<br />

***Create .env***<br />
PORT=3000<br />
SESSION_SECRET_KEY= sua key aleatoria<br />

POSTGRES_DB=apiloja<br />
POSTGRES_USER= seu user<br />
POSTGRES_PWD= sua password<br />
POSTGRES_PORT=5432<br />
POSTGRES_HOST=127.0.0.1<br />

***Run Migrations***<br />
npx sequelize-cli db:migrate

***API Documentation***<br />
**Link:** https://documenter.getpostman.com/view/20194488/UyxojQMa<br />


**Product Routes** <br />
***router.get("/products", productController.getAllProducts)*** <br />
Get Products List <br />
***router.post("/products", productController.addProduct)*** <br />
Crate new product <br />
***router.get("/products/:id", productController.findOneProductById)*** <br />
Get one product by id <br />
***router.put("/products/:id", productController.editProduct)*** <br />
Edit Pproduct by id <br />
***router.delete("products/:id", productController.deleteProduct)*** <br />
Delete product by id <br />

**Cart Routes** <br />
***router.get("/carts", cartController.getAllCarts)*** <br />
Get carts list <br />
***router.post("/carts", cartController.addNewCart)*** <br />
Create new cart <br />
***router.get("/carts/products", cartController.findOneCartBySessionId)*** <br />
Get one cart by id <br />
***router.post("/carts/products", cartController.addCartItem)*** <br />
Add Product to cart <br />
***router.put("/carts/products", cartController.editCartItem)*** <br />
Edit on cart product by id <br />
***router.delete("/carts/products", cartController.deleteCartItem)*** <br />
Delete cart product by id <br />
