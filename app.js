import express from "express"
import dotenv from "dotenv";
import conn from "./db.js";
import mongoose from "mongoose";

import pageRoute from "./routes/pageRoute.js";
import aboutRoute from "./routes/aboutRoute.js";

dotenv.config();

conn();

const app = express();
const port = process.env.PORT;

// templete engine
app.set('view engine', "ejs");

//static files midd
app.use(express.static('public'));
app.use(express.json());

app.use("/", pageRoute)
app.use("/about", aboutRoute)

// app.get("/", (req, res) => {
//     res.render("index");
// });
//
// app.get("/about", (req, res) => {
//     res.render("about");
// });

app.listen(port, () => {
   console.log(`Application run: ${port}`)
});