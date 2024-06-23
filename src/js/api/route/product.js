
// import { Router } from "../apiconfig/apiconfiguration";

// class productRoute {
//     constructor() {
//         this.router = new Router();
//         this.initializeRoutes();
//     }

//     initializeRoutes() {
//         this.router.get('/products', this.getProducts);
//         this.router.post('/products', this.createProduct);
//         this.router.put('/products/:id', this.updateProduct);
//         this.router.delete('/products/:id', this.deleteProduct);
//     }

//     getProducts(req, res) {
//         // Handle GET /products request using this.router.get
//         this.router.get('products', req.query)
//             .then(products => res.json(products))
//             .catch(error => {
//                 console.error('Error fetching products:', error);
//                 res.status(500).json({ error: 'Failed to fetch products' });
//             });
//     }

//     createProduct(req, res) {
//         // Handle POST /products request using this.router.create
//         const { body } = req;
//         this.router.create('products', body)
//             .then(newProduct => res.status(201).json(newProduct))
//             .catch(error => {
//                 console.error('Error creating product:', error);
//                 res.status(500).json({ error: 'Failed to create product' });
//             });
//     }

//     updateProduct(req, res) {
//         // Handle PUT /products/:id request using this.router.update
//         const { id } = req.params;
//         const { body } = req;
//         this.router.update(`products/${id}`, body)
//             .then(updatedProduct => res.json(updatedProduct))
//             .catch(error => {
//                 console.error('Error updating product:', error);
//                 res.status(500).json({ error: 'Failed to update product' });
//             });
//     }

//     deleteProduct(req, res) {
//         // Handle DELETE /products/:id request using this.router.destroy
//         const { id } = req.params;
//         this.router.destroy(`products/${id}`)
//             .then(() => res.sendStatus(204))
//             .catch(error => {
//                 console.error('Error deleting product:', error);
//                 res.status(500).json({ error: 'Failed to delete product' });
//             });
//     }
// }

// export default new productRoute().router;
