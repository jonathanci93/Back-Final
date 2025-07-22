import { Router } from "express";
import ProductManager from "../clases/productManager.js";

const productRouter = Router();
const PM = new ProductManager();

productRouter.get("/", async (req, res) => {
    const products = await PM.getProducts();
    res.send({status:"OK", data:products});
})
productRouter.get("/:id", async (req, res) => {
    const {id} = req.params;    
    const product = await PM.getProductById(id);

    if (product) {
        res.send({status:"OK", data:product});
    } else {
        res.status(400).send({status:"Error", message:"No existe el Producto buscado!"});
    }

})
productRouter.post("/", async (req, res) => {
    try {
        const {title, description, code, price, stock, category, thumbnails} = req.body;

        if (!title) {
            res.status(400).send({status:"Error", message:"Complete el campo Title!"});    
        }

        if (!description) {
            res.status(400).send({status:"Error", message:"Complete el campo Descripcion!"});    
        }

        if (!code) {
            res.status(400).send({status:"Error", message:"Complete el campo Code!"});    
        }

        if (!price) {
            res.status(400).send({status:"Error", message:"Complete el campo Price!"});    
        }

        if (!stock) {
            res.status(400).send({status:"Error", message:"Complete el campo Stock!"});    
        }

        if (!category) {
            res.status(400).send({status:"Error", message:"Complete el campo Category!"});    
        }

        const product = {title, description, code, price, stock, category, thumbnails};
        const result = await PM.addProduct(product);
        res.send({status:"OK", data:result, message:"Producto creado!"});
    } catch (error) {
        res.status(400).send({status:"Error", message:"Error! No se pudo crear el Producto!"});
    }
})
productRouter.put("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {title, description, code, price, stock, category, thumbnails} = req.body;

        if (!title) {
            res.status(400).send({status:"Error", message:"Complete el campo Title!"});    
        }

        if (!description) {
            res.status(400).send({status:"Error", message:"Complete el campo Descripcion!"});    
        }

        if (!code) {
            res.status(400).send({status:"Error", message:"Complete el campo Code!"});    
        }

        if (!price) {
            res.status(400).send({status:"Error", message:"Complete el campo Price!"});    
        }

        if (!stock) {
            res.status(400).send({status:"Error", message:"Complete el campo Stock!"});    
        }

        if (!category) {
            res.status(400).send({status:"Error", message:"Complete el campo Category!"});    
        }

        const product = {title, description, code, price, stock, category, thumbnails};
        const result = await PM.editProduct(id, product);

        if (result.modifiedCount > 0) {
            res.send({status:"OK", data:result, message:"Producto modificado!"});
        } else {
            res.send({status:"Error", message:"Error! No se pudo modificar el Producto!"});
        }
    } catch (error) {
        res.status(400).send({status:"Error", message:"Error! No se pudo modificar el Producto!"});
    }
})
productRouter.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const result = await PM.deleteProduct(id);

        if (result.deletedCount > 0) {
            res.send({status:"OK", data:result, message:"Producto eliminado!"});
        } else {
            res.send({status:"Error", message:"Error! No se pudo eliminar el Producto!"});
        }
    } catch (error) {
        res.status(400).send({status:"Error", message:"Error! No se pudo eliminar el Producto!"});
    }
})

export default productRouter