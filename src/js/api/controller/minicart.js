export class MiniCartController {
    constructor(cartModel, cartView) {
        this.cartModel = cartModel;
        this.cartView = cartView;

        this.cartModel.subscribe(this.onCartListChanged.bind(this));

        // Initially render all cart items and the item count
        this.onCartListChanged(this.cartModel.getCartItems());
        this.cartView.bindRemoveFromCart(this.handleRemoveFromCart.bind(this));
        this.updateCartItemCounter();
    }

    onCartListChanged(cartItems) {
        this.cartView.renderCartItems(cartItems);
        this.updateCartItemCounter();
    }

    handleRemoveFromCart(index) {
        this.cartModel.removeFromCart(index);
    }

    handleAddToCart(product) {
        this.cartModel.addToCart(product);
        const latestItem = this.cartModel.getLatestItem();
        this.cartView.renderLatestItem(latestItem);
        this.updateCartItemCounter();
    }

    updateCartItemCounter() {
        const itemCount = this.cartModel.getItemCount();
        this.cartView.renderItemCount(itemCount);
    }
}
