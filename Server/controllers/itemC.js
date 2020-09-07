const express = require("express");
const ItemsLogic = require("../logic/itemL");
const router = express.Router();
// GET <http://localhost:3000/api/items>
router.get("/", async (request, response) => {
  try {
    const items = await ItemsLogic.getAllItemsAsync();
    response.json(items);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
// GET <http://localhost:3000/api/items>
router.get("/", async (request, response) => {
    try {
      const items = await ItemsLogic.getAllItemsAsync();
      response.json(items);
    } catch (err) {
      response.status(500).send(err.message);
    }
  });

  // GET <http://localhost:3000/api/items/item/:id>
router.get("/item/:id", async (request, response) => {
    const id = +request.params.id
    try {
      const item = await ItemsLogic.getOneItemAsync(id);
      response.json(item);
    } catch (err) {
      response.status(500).send(err.message);
    }
  });
  // POST <http://localhost:3000/api/items/filter>
  router.post("/filter", async (request, response) => {
    const term = request.body.tags
    try {
      const item = await ItemsLogic.filteItemsAsync(term);
      response.json(item);
    } catch (err) {
      response.status(500).send(err.message);
    }
  });
    // POST <http://localhost:3000/api/items/add>
    router.post("/add", async (request, response) => {
        const data = request.body
        const time = new Date()
        const year = time.getFullYear()
        const month = time.getMonth()
        const day = time.getDate() +1
        const hour = time.getHours()
        const minute = time.getMinutes()
        const second = time.getSeconds()
        const timenow = `${year}-${month}-${day} ${hour}:${minute}:${second}`
        data.itemDate = timenow
        try {
          const item = await ItemsLogic.addItemAsync(data);
          response.json(item);
        } catch (err) {
          response.status(500).send(err.message);
        }
      });

  

module.exports = router;
