// This is an example of properly organized imports

// Type definitions
interface User {
  id: string;
  name: string;
  email: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
}

interface Order {
  id: string;
  userId: string;
  products: Product[];
  total: number;
  date: Date;
}

// Helper functions
function calculateTotal(products: Product[]): number {
  return products.reduce((sum, product) => sum + product.price, 0);
}

function formatCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

// Main functionality
export function createOrder(user: User, products: Product[]): Order {
  const total = calculateTotal(products);

  console.log(`Creating order for ${user.name}`);
  console.log(`Total: ${formatCurrency(total)}`);

  return {
    id: Math.random().toString(36).substring(2, 15),
    date: new Date(),
    products,
    total,
    userId: user.id,
  };
}

export function getOrderSummary(order: Order): string {
  const formattedTotal = formatCurrency(order.total);
  const formattedDate = order.date.toISOString().split('T')[0];

  return `Order #${order.id} - Date: ${formattedDate} - Total: ${formattedTotal}`;
}
