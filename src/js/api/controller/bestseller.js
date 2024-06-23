export class BestSellerController {
    constructor(bestsellermodel, bestsellerview, minicartmodel) {
        this.bestsellermodel = bestsellermodel;
        this.bestsellerview = bestsellerview;   
        this.minicartmodel = minicartmodel;
   
        this.renderView = this.bestsellerview.renderItems(this.bestsellermodel.getProducts());
        this.bestsellerview.bindAddToCart(this.handleAddToCart.bind(this));
        
        

        // this.onProductListChanged(this.productModel.getProducts());
    }

    // onProductListChanged(products) {
    //     this.productView.renderProducts(products);
    // };

    handleAddToCart(productId) {
        const product = this.bestsellermodel.getProducts().find(p => p.intProductId === productId);
        console.log("Kelan mo gusto logs :", product);
        this.minicartmodel.addToCart(product);
    };

    
}


