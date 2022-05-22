# node_ts-react-api_loja_integrada
Projeto com o Backend ultilizando uma Api própria de Carrinho de Compras, Produtos e Cupons,  integrada à um Frontend Desenvolvido em React

**Product Routes**
***router.get("/products", productController.getAllProducts)***
Get Products List
***router.post("/products", productController.addProduct)***
Crate new product
***router.get("/products/:id", productController.findOneProductById)***
Get one product by id
***router.put("/products/:id", productController.editProduct)***
Edit Pproduct by id
***router.delete("products/:id", productController.deleteProduct)***
Delete product by id
**Cart Routes**
***router.get("/carts", cartController.getAllCarts)***
***//router.post("/carts", cartController.addNewCart)***
***router.get("/carts/products", cartController.findOneCartBySessionId)***

***router.post("/carts/products", cartController.addCartItem)***
***router.put("/carts/products", cartController.editCartItem)***
***router.delete("/carts/products", cartController.deleteCartItem)***
