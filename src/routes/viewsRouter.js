import express from "express"
import ProductManager from "../clases/productManager.js";

const viewsRouter = express.Router();
const PM = new ProductManager();
viewsRouter.get("/", async (req, res) => {
    const products = await PM.getProducts();
    res.render("home", {products});
})

export default viewsRouter