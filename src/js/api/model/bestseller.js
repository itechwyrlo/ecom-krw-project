export class BestSellerModel {
    constructor() {
        this.products = [
            { intProductId: 1, strProductImage: 'images/Nightstand -6.jpg', strProductName: 'Product 1', dblProductPrice: '$4.00' },
            { intProductId: 2, strProductImage: 'src/images/Parsons Chair -9.jpg', strProductName: 'Product 2', dblProductPrice: '$3.00' },
            { intProductId: 3, strProductImage: 'src/images/Slipper -2.jpg', strProductName: 'Product 3', dblProductPrice: '$2.00' },
            { intProductId: 4, strProductImage: 'src/images/Nightstand -6.jpg', strProductName: 'Product 4', dblProductPrice: '$1.00' }
        ];
    }
        
    getProducts() {
        return this.products;
    }
}
