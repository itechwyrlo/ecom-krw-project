!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequirebd2f;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequirebd2f=r),r.register("17aF2",(function(t,n){var i,o,c,a;i=t.exports,o="MiniCartView",c=function(){return l},Object.defineProperty(i,o,{get:c,set:a,enumerable:!0,configurable:!0});var s=r("8MBJY"),d=r("a2hTj"),l=function(){"use strict";function t(n,i){e(s)(this,t),this.selector=n,this.itemCountSelector=i}return e(d)(t,[{key:"getSelector",value:function(){return document.querySelector(this.selector)}},{key:"getItemCountSelector",value:function(){return document.querySelector(this.itemCountSelector)}},{key:"renderCartItems",value:function(e){var t=this,n=this.getSelector();n.innerHTML="",e.forEach((function(e,i){t.renderCartItem(e,n,i)}))}},{key:"renderCartItem",value:function(e,t,n){var i='\n            <div class="mc-item flex" data-index="'.concat(n,'">\n                <div class="mc-item-img">\n                    <img src="').concat(e.strProductImage,'" alt="">\n                </div>\n                <div class="mc-item-info">\n                    <div class="item-option flex">\n                        <div class="mc-item-name">\n                            <p class="item-name">').concat(e.strProductName,'</p>\n                        </div>\n                        <div class="item-remove-option">\n                            <button class="btn" id="remove-item">X</button>\n                        </div>\n                    </div>\n                    <div class="item-price">\n                        <p class="item-price">').concat(e.dblProductPrice,'</p>\n                    </div>\n                    <div class="mc-item-qty-container">\n                    <p class="item-qty">').concat(e.intQuantity,"</p>\n                </div>\n\n                </div>\n            </div>");t.insertAdjacentHTML("beforeend",i)}},{key:"renderLatestItem",value:function(e){var t=this.getSelector();this.renderCartItem(e[0],t,this.getSelector().children.length)}},{key:"bindRemoveFromCart",value:function(e){document.addEventListener("click",(function(t){if(t.target&&"remove-item"===t.target.id){var n=t.target.closest(".mc-item").dataset.index;if(n){var i=parseInt(n,10);e(i)}}}))}},{key:"renderItemCount",value:function(e){var t=this.getItemCountSelector();t&&(t.textContent=e)}}]),t}()})),r("17aF2")}();
//# sourceMappingURL=index.ba6ccc7e.js.map