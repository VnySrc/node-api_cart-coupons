# node_ts-react-api_loja_integrada
Projeto com o Backend ultilizando uma Api própria de Carrinho de Compras, Produtos e Cupons,  integrada à um Frontend Desenvolvido em React
**Product Routes**
***router.get("/products", productController.getAllProducts)***<br />
Get Products List
***router.post("/products", productController.addProduct)***<br />
Crate new product
***router.get("/products/:id", productController.findOneProductById)***<br />
Get one product by id
***router.put("/products/:id", productController.editProduct)***<br />
Edit Pproduct by id
***router.delete("products/:id", productController.deleteProduct)***<br />
Delete product by id

**Cart Routes** <br />
***router.get("/carts", cartController.getAllCarts)***<br />
Get carts list
***router.post("/carts", cartController.addNewCart)***<br />
Create new cart
***router.get("/carts/products", cartController.findOneCartBySessionId)***<br />
Get one cart by id
***router.post("/carts/products", cartController.addCartItem)***<br />
Add Product to cart
***router.put("/carts/products", cartController.editCartItem)***<br />
Edit on cart product by id 
***router.delete("/carts/products", cartController.deleteCartItem)***<br />
Delete cart product by id
