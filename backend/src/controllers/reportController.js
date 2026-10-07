const { sales, products } = require('../data/store');

const getDashboardSummary = (req, res) => {
  const totalRevenue = sales.reduce((sum, sale) => sum + Number(sale.finalAmount || 0), 0);
  const totalOrders = sales.length;
  const lowStockItems = products.filter((product) => product.stock <= product.reorderLevel);
  const topSelling = products
    .map((product) => ({
      name: product.name,
      stock: product.stock,
      price: product.sellingPrice,
    }))
    .sort((a, b) => a.stock - b.stock)
    .slice(0, 5);

  res.json({
    totalRevenue: Number(totalRevenue.toFixed(2)),
    totalOrders,
    lowStockItems,
    topSelling,
  });
};

const getSalesReport = (req, res) => {
  const report = sales.map((sale) => ({
    id: sale.id,
    customer: sale.customer,
    totalAmount: sale.finalAmount,
    paymentMethod: sale.paymentMethod,
    date: sale.createdAt,
  }));

  res.json(report);
};

module.exports = { getDashboardSummary, getSalesReport };
