const stats = [
  { label: 'Total Revenue', value: '₹ 8,42,300' },
  { label: 'Orders Today', value: '324' },
  { label: 'Low Stock', value: '12 Items' },
  { label: 'Profit', value: '₹ 1,96,700' },
];

const inventory = [
  { name: 'Rice 5kg', stock: 45, status: 'Healthy' },
  { name: 'Milk Pack', stock: 18, status: 'Low' },
  { name: 'Tomato', stock: 30, status: 'Healthy' },
  { name: 'Bread', stock: 8, status: 'Critical' },
];

const sales = [
  { customer: 'Riya', amount: '₹ 260', method: 'UPI' },
  { customer: 'Mehul', amount: '₹ 420', method: 'Card' },
  { customer: 'Asha', amount: '₹ 180', method: 'Cash' },
];

export default function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Retail Dashboard</p>
          <h1>Grocery Hub</h1>
        </div>
        <button className="primary-button">+ New Sale</button>
      </header>

      <section className="stats-grid">
        {stats.map((item) => (
          <div key={item.label} className="stat-card">
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </section>

      <section className="content-grid">
        <div className="panel">
          <h2>Inventory Overview</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Stock</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.stock}</td>
                  <td>
                    <span className={`chip ${item.status.toLowerCase()}`}>{item.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="panel">
          <h2>Recent Sales</h2>
          <ul className="sales-list">
            {sales.map((sale) => (
              <li key={sale.customer}>
                <div>
                  <strong>{sale.customer}</strong>
                  <small>{sale.method}</small>
                </div>
                <span>{sale.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
