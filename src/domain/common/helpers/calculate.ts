export function calculateTotalCost(unitCost: number, quantity: number): number {
  return parseFloat((quantity * unitCost).toFixed(2));
}

export function calculateRevenue(price: number, quantity: number): number {
  return parseFloat((quantity * price).toFixed(2));
}

export function calculateProfit(revenue: number, totalCost: number): number {
  return parseFloat((revenue - totalCost).toFixed(2));
}
