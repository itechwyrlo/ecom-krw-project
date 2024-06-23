export class MiniCartView {
    constructor(selector, itemCountSelector) {
        this.selector = selector;
        this.itemCountSelector = itemCountSelector;
    }

    getSelector() {
        return document.querySelector(this.selector);
    }

    getItemCountSelector() {
        return document.querySelector(this.itemCountSelector);
    }

    renderCartItems(cartItems) {
        const cartItemsRow = this.getSelector();
        cartItemsRow.innerHTML = ''; 

        cartItems.forEach((item, index) => {
            this.renderCartItem(item, cartItemsRow, index);
        });
    }

    renderCartItem(item, container, index) {
        const cartItemsEl = `
            <div class="mc-item flex" data-index="${index}">
                <div class="mc-item-img">
                    <img src="${item.strProductImage}" alt="">
                </div>
                <div class="mc-item-info">
                    <div class="item-option flex">
                        <div class="mc-item-name">
                            <p class="item-name">${item.strProductName}</p>
                        </div>
                        <div class="item-remove-option">
                            <button class="btn" id="remove-item">X</button>
                        </div>
                    </div>
                    <div class="item-price">
                        <p class="item-price">${item.dblProductPrice}</p>
                    </div>
                    <div class="mc-item-qty-container">
                    <p class="item-qty">${item.intQuantity}</p>
                </div>

                </div>
            </div>`;
        container.insertAdjacentHTML("beforeend", cartItemsEl);
    }

    renderLatestItem(latestItem) {
        const cartItemsRow = this.getSelector();
        this.renderCartItem(latestItem[0], cartItemsRow, this.getSelector().children.length);
    }

    bindRemoveFromCart(handler) {
        document.addEventListener('click', event => {
            if (event.target && event.target.id === 'remove-item') {
                const item = event.target.closest('.mc-item');
                const itemIndex = item.dataset.index;
                if (itemIndex) {
                    const index = parseInt(itemIndex, 10);
                    handler(index);
                }
            }
        });
    }

    renderItemCount(itemCount) {

        const itemCountEl = this.getItemCountSelector();
        if (itemCountEl) {
            itemCountEl.textContent = itemCount;
        }
    }
}
