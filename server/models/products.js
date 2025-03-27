const data = require("../data/products.json");

function getAll() {
  return data;
}

function get(id) {
  return data.find((product) => product.id === id);
}

function create(product) {
  const newItem = {
    id: data.length + 1,
    ...product,
  };
  data.push(newItem);
  return newItem;
}

function update(id, product) {
  const index = data.findIndex((product) => product.id == id);
  const updatedItem = { ...data[index], ...product };
  data[index] = updatedItem;
  return updatedItem;
}

function remove(id) {
  const index = data.findIndex((product) => product.id == id);
  const deletedItem = data.splice(index, 1);
  return deletedItem;
}

module.exports = {
  getAll,
  get,
  create,
  update,
  remove,
};
