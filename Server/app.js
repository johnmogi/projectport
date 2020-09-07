const express = require("express");
const cors = require("cors");
const itemsControler = require("./controllers/itemC");
const server = express();
server.use(cors());
server.use(express.json());
server.use("/api/items", itemsControler);
server.listen(3000, () => 
console.log("Listening on <http://localhost:3000>"));
