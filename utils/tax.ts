import { TaxBracketType, CalculatedTaxType } from './tax.type';

export const getCalculatedTax = (
  annualIncome: number,
  taxBrackets: TaxBracketType[]
): CalculatedTaxType | undefined => {
  if (!taxBrackets?.length) {
    return;
  }

  let totalTax = 0;

  const calculatedTaxBrackets = taxBrackets.map(({ max, min, rate }) => {
    const taxableRange = () => {
      if (!max) {
        return annualIncome > min ? annualIncome - min : 0;
      }

      if (annualIncome >= max) {
        return max - min;
      }

      if (annualIncome < max && annualIncome >= min) {
        return annualIncome - min;
      }

      return 0;
    };

    const marginAmount = taxableRange() * rate;
    totalTax += marginAmount;

    return {
      max,
      min,
      rate,
      marginAmount,
    };
  });

  return { calculatedTaxBrackets, totalTax };
};
