const formatter = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
  minimumFractionDigits: 2,
});

export const PriceFormatter = (price: number): string =>
  formatter.format(price);
