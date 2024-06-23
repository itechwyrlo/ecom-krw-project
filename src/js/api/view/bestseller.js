export class BestSellerView {
  constructor(selector) {
    this.selector = selector;
    // this.app = document.getElementById('app');
    // this.productList = this.createElement('ul', 'product-list');
    // this.app.append(this.productList);
    // this.renderItems();
  }

  getSelector() {
    return document.querySelector(this.selector);
  }

  // createElement(tag, className) {
  //     const element = document.createElement(tag);
  //     if (className) element.classList.add(className);
  //     return element;
  // }

  renderItems(items) {
    const bsContainer = this.getSelector();

    items.forEach((item) => {
      // template literals
      const itemsEl = `<div class="bs-product-card" data-id="${item.intProductId}">
            <div class="bs-item-img">
                <img src="${item.strProductImage}" alt="">
            </div>
            <div class="bs-item-description">
                <p class="item-name">${item.strProductName}</p>
                <p class="item-price">${item.dblProductPrice}</p>
                <div class="bs-item-options">
                    <button class="btn" id="addToCart">Add To Cart</button>
                    <button class="btn" id="viewItem">View Details</button>
                </div>
            </div>
            
        </div>`;
      bsContainer.insertAdjacentHTML("beforeend", itemsEl);
    });
  }

  bindAddToCart(handler) {
    document.addEventListener("click", (event) => {
      if (event.target && event.target.id === "addToCart") {
        const item = event.target.closest(".bs-product-card");
        const itemId = item.dataset.id;
        if (itemId) {
          const id = parseInt(itemId, 10);
          handler(id);
        }
      }
    });
  }



}




