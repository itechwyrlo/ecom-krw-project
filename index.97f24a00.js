var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequirebd2f;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequirebd2f=r),r.register("eCq9C",(function(e,t){var n,r,i,o;n=e.exports,r="MiniCartView",i=function(){return s},Object.defineProperty(n,r,{get:i,set:o,enumerable:!0,configurable:!0});class s{getSelector(){return document.querySelector(this.selector)}getItemCountSelector(){return document.querySelector(this.itemCountSelector)}renderCartItems(e){const t=this.getSelector();t.innerHTML="",e.forEach(((e,n)=>{this.renderCartItem(e,t,n)}))}renderCartItem(e,t,n){const r=`\n            <div class="mc-item flex" data-index="${n}">\n                <div class="mc-item-img">\n                    <img src="${e.strProductImage}" alt="">\n                </div>\n                <div class="mc-item-info">\n                    <div class="item-option flex">\n                        <div class="mc-item-name">\n                            <p class="item-name">${e.strProductName}</p>\n                        </div>\n                        <div class="item-remove-option">\n                            <button class="btn" id="remove-item">X</button>\n                        </div>\n                    </div>\n                    <div class="item-price">\n                        <p class="item-price">${e.dblProductPrice}</p>\n                    </div>\n                    <div class="mc-item-qty-container">\n                    <p class="item-qty">${e.intQuantity}</p>\n                </div>\n\n                </div>\n            </div>`;t.insertAdjacentHTML("beforeend",r)}renderLatestItem(e){const t=this.getSelector();this.renderCartItem(e[0],t,this.getSelector().children.length)}bindRemoveFromCart(e){document.addEventListener("click",(t=>{if(t.target&&"remove-item"===t.target.id){const n=t.target.closest(".mc-item").dataset.index;if(n){const t=parseInt(n,10);e(t)}}}))}renderItemCount(e){const t=this.getItemCountSelector();t&&(t.textContent=e)}constructor(e,t){this.selector=e,this.itemCountSelector=t}}})),r("eCq9C");
//# sourceMappingURL=index.97f24a00.js.map