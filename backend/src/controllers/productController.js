const { products } = require('../data/store');

const getProducts = (req, res) => {
  res.json(products);
};

const getProductById = (req, res) => {
  const product = products.find((item) => item.id === Number(req.params.id));

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return res.json(product);
};

const addProduct = (req, res) => {
  const { sku, name, category, stock, purchasePrice, sellingPrice, reorderLevel } = req.body;

  if (!sku || !name || !category || !stock || !purchasePrice || !sellingPrice) {
    return res.status(400).json({ message: 'Please provide all required product fields' });
  }

  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    sku,
    name,
    category,
    stock: Number(stock),
    purchasePrice: Number(purchasePrice),
    sellingPrice: Number(sellingPrice),
    reorderLevel: Number(reorderLevel || 10),
  };

  products.push(newProduct);
  return res.status(201).json(newProduct);
};

const updateProduct = (req, res) => {
  const productIndex = products.findIndex((item) => item.id === Number(req.params.id));

  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  products[productIndex] = {
    ...products[productIndex],
    ...req.body,
    id: Number(req.params.id),
  };

  return res.json(products[productIndex]);
};

module.exports = { getProducts, getProductById, addProduct, updateProduct };
