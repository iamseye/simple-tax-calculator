import { useMemo, useRef } from 'react';
import { useFetch } from './useFetch';

import { CalculatedTaxType, TaxBracketResponse } from '@/utils/tax.type';
import { getCalculatedTax } from '@/utils/tax';

export type useTaxResponse = {
  isLoading: boolean;
  tax?: CalculatedTaxType;
  error?: Error;
};
export const useTax = (annualIncome: number, year: number): useTaxResponse => {
  const isCalculatingRef = useRef(true);
  const fetchTaxBracketsUrl = year
    ? `${process.env.NEXT_PUBLIC_TAX_API}/tax-calculator/tax-year/${year}`
    : '';

  const {
    data: taxBracketsResponse,
    error,
    isLoading,
  } = useFetch<TaxBracketResponse>(fetchTaxBracketsUrl, 5);

  const calculatedTax: CalculatedTaxType | undefined = useMemo(() => {
    if (taxBracketsResponse?.tax_brackets) {
      const calculatedTax = getCalculatedTax(
        annualIncome,
        taxBracketsResponse?.tax_brackets
      );

      isCalculatingRef.current = false;
      return calculatedTax;
    }
    isCalculatingRef.current = false;
    return;
  }, [taxBracketsResponse, annualIncome]);

  return {
    tax: calculatedTax,
    error,
    isLoading: isLoading || isCalculatingRef.current,
  };
};
