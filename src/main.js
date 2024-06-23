import { BestSellerModel } from "./js/api/model/bestseller";
import { BestSellerView } from "./js/api/view/bestseller";
import { BestSellerView } from "./js/api/view/bestseller";
import { BestSellerController } from "./js/api/controller/bestseller";
import { MiniCartModel } from "./js/api/model/cartModel";
import { MiniCartController } from "./js/api/controller/minicart";
import { MiniCartView } from "./js/api/view/minicart";


document.addEventListener("DOMContentLoaded", () => {
    const bestSellerModel = new BestSellerModel();
    const bestSellerView = new BestSellerView(".bestseller-grid");
    const miniCartModel = new MiniCartModel();
    const minicartView = new MiniCartView(".mc-item-container", ".item-count");
    const productController = new BestSellerController(bestSellerModel, bestSellerView, miniCartModel);
    const minicartController = new MiniCartController(miniCartModel, minicartView);
   
});
