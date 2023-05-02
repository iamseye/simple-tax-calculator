export type TaxBracketType = {
  max?: number;
  min: number;
  rate: number;
};

export type TaxBracketWithAmountType = TaxBracketType & {
  marginAmount: number;
};

export type CalculatedTaxType = {
  calculatedTaxBrackets: TaxBracketWithAmountType[];
  totalTax: number;
};

export type TaxBracketResponse = {
  tax_brackets: TaxBracketType[];
};

export type useTaxResponse = {
  calculatedTaxBrackets: TaxBracketWithAmountType[];
  totalTax: number;
};
