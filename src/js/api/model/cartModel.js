import { Observable } from "../global/observable";

export class MiniCartModel extends Observable {
    constructor() {
        super();
        this.cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    }

    getCartItems() {
        return this.cartItems;
    }

    getItemCount() {
        return this.cartItems.length;
    }

    getLatestItem() {
        if (this.cartItems.length === 0) {
            return [];
        }
        return [this.cartItems[this.cartItems.length - 1]];
    }

    addToCart(product) {
        this.cartItems.push(product);
        this.updateLocalStorage();
        this.notify(this.cartItems);
    }

    removeFromCart(index) {
        this.cartItems.splice(index, 1);
        this.updateLocalStorage();
        this.notify(this.cartItems);
    }

    updateLocalStorage() {
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
}
