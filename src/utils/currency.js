export function formatCurrencyUSD(value) {
  try {
    const num = Number(value);
    if (Number.isNaN(num)) return value;
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
  } catch {
    return value;
  }
}
