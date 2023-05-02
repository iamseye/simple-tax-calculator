import { useMemo, useState } from 'react';
import { useFetch } from './useFetch';

import { CalculatedTaxType, TaxBracketResponse } from '@/utils/tax.type';
import { getCalculatedTax } from '@/utils/tax';

export const useTax = (annualIncome: number, year: number) => {
  const [isCalculating, setIsCalculating] = useState(true);
  const fetchTaxBracketsUrl = year
    ? `${process.env.NEXT_PUBLIC_TAX_API}/tax-calculator/tax-year/${year}`
    : '';

  const {
    data: taxBracketsResponse,
    error,
    isLoading,
  } = useFetch<TaxBracketResponse>(fetchTaxBracketsUrl, 5);

  const calculatedTax: CalculatedTaxType | undefined = useMemo(() => {
    if (annualIncome && taxBracketsResponse?.tax_brackets) {
      const calculatedTax = getCalculatedTax(
        annualIncome,
        taxBracketsResponse?.tax_brackets
      );

      setIsCalculating(false);
      return calculatedTax;
    }
    setIsCalculating(false);
    return;
  }, [taxBracketsResponse, annualIncome]);

  return {
    tax: calculatedTax,
    error,
    isLoading: isLoading || isCalculating,
  };
};
