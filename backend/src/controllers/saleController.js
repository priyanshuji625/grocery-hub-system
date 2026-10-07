const { sales, products } = require('../data/store');

const createSale = (req, res) => {
  const { customer, cashierId, items, discount, paymentMethod } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ message: 'Sale items are required' });
  }

  let total = 0;

  items.forEach((item) => {
    const product = products.find((p) => p.id === item.productId);
    if (product) {
      total += product.sellingPrice * item.quantity;
    }
  });

  const tax = Number((total * 0.07).toFixed(2));
  const finalDiscount = Number(discount || 0);
  const finalAmount = Number((total + tax - finalDiscount).toFixed(2));

  const sale = {
    id: sales.length ? sales[sales.length - 1].id + 1 : 1,
    customer: customer || 'Walk-in Customer',
    cashierId,
    total: Number(total.toFixed(2)),
    discount: finalDiscount,
    tax,
    finalAmount,
    paymentMethod: paymentMethod || 'cash',
    createdAt: new Date().toISOString(),
  };

  sales.unshift(sale);

  items.forEach((item) => {
    const product = products.find((p) => p.id === item.productId);
    if (product) {
      product.stock -= item.quantity;
    }
  });

  return res.status(201).json(sale);
};

const getSales = (req, res) => {
  res.json(sales);
};

module.exports = { createSale, getSales };
