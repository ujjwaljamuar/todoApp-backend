import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import Routes from "./routes/route.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json("Backend Server is running ...");
});


app.use("/", Routes);

const PORT = process.env.PORT || 8080;

Connection();


app.listen(PORT, () =>
  console.log(`server is running successfully on PORT: ${PORT}`)
);
