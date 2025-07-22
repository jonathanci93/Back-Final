import express from "express"
import handlebars from "express-handlebars";
import mongoose from "mongoose"
import productRouter from "./src/routes/productRouter.js";
import viewsRouter from "./src/routes/viewsRouter.js";
import __dirname from "./utils.js";

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/src/views");
app.set("view engine", "handlebars");
app.use("/api/products", productRouter);
app.use("/", viewsRouter);

mongoose.connect("mongodb+srv://jonacarles:jonacarles1234@final.r4pdr8u.mongodb.net/?retryWrites=true&w=majority&appName=Final");
