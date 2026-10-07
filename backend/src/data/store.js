const bcrypt = require('bcryptjs');

const users = [
  {
    id: 1,
    name: 'Admin User',
    email: 'admin@groceryhub.com',
    password: bcrypt.hashSync('admin123', 10),
    role: 'admin',
  },
  {
    id: 2,
    name: 'Cashier User',
    email: 'cashier@groceryhub.com',
    password: bcrypt.hashSync('cashier123', 10),
    role: 'cashier',
  },
];

const products = [
  { id: 1, sku: 'GROC-1001', name: 'Rice 5kg', category: 'Grains', stock: 45, purchasePrice: 120, sellingPrice: 150, reorderLevel: 10 },
  { id: 2, sku: 'GROC-1002', name: 'Milk Pack', category: 'Dairy', stock: 18, purchasePrice: 40, sellingPrice: 55, reorderLevel: 12 },
  { id: 3, sku: 'GROC-1003', name: 'Tomato', category: 'Vegetables', stock: 30, purchasePrice: 20, sellingPrice: 30, reorderLevel: 15 },
  { id: 4, sku: 'GROC-1004', name: 'Bread', category: 'Bakery', stock: 8, purchasePrice: 30, sellingPrice: 45, reorderLevel: 10 },
  { id: 5, sku: 'GROC-1005', name: 'Soap', category: 'Household', stock: 55, purchasePrice: 28, sellingPrice: 40, reorderLevel: 20 },
];

const sales = [
  { id: 1, customer: 'Walk-in Customer', cashierId: 2, total: 255, discount: 10, tax: 15, finalAmount: 260, paymentMethod: 'cash', createdAt: '2026-10-07T10:00:00Z' },
  { id: 2, customer: 'Riya', cashierId: 2, total: 180, discount: 0, tax: 12, finalAmount: 192, paymentMethod: 'UPI', createdAt: '2026-10-07T12:20:00Z' },
];

module.exports = { users, products, sales };
