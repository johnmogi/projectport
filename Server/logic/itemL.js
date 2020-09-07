const dal = require("../dal");
async function getAllItemsAsync() {
  const sql = "SELECT * FROM `items`";
  const items = await dal.executeAsync(sql);
  return items;
}
async function getOneItemAsync(id) {
    const sql = `SELECT * FROM items Where itemID = ${id}`;
    const item = await dal.executeAsync(sql);
    return item;
  }
async function filteItemsAsync(term) {
    const sql = `SELECT * FROM items WHERE tags LIKE '%${term}%'`;
    const items = await dal.executeAsync(sql);
    return items;
  }

  async function addItemAsync(data) {
    const sql = `INSERT INTO items ( itemName, itemDescription, thumb, itemImage, itemDate, tags) VALUES ('${data.itemName}', '${data.itemDescription}', '${data.thumb}', '${data.itemImage}', '${data.itemDate}', '${data.tags}')`;
    const items = await dal.executeAsync(sql);
    return items;
  }
//   INSERT INTO `items` (`itemID`, `itemName`, `itemDescription`, `thumb`, `itemImage`, `itemDate`, `tags`, `category`) VALUES (NULL, 'Elementor landing page', 'up to 3 hours, 1 hour design gather materials etc.', 'small1', 'big1', '2020-09-07 08:50:36.000000', 'landing pages, elementor, wordpress', 'landing pages');

module.exports = { getAllItemsAsync, getOneItemAsync ,filteItemsAsync,
addItemAsync };
