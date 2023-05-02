import {
  INCOME_150000_TAX_BRACKETS_WITH_MARGIN_AMOUNT_MOCK,
  INCOME_250000_TAX_BRACKETS_WITH_MARGIN_AMOUNT_MOCK,
  INCOME_48000_TAX_BRACKETS_WITH_MARGIN_AMOUNT_MOCK,
  TAX_BRACKETS_MOCK,
} from '../__mocks__/tax.mock';
import { getCalculatedTax } from '../tax';
import { TaxBracketType, TaxBracketWithAmountType } from '../tax.type';

describe('tax', () => {
  describe('calculatedTaxBracket', () => {
    const mockTaxBracket: TaxBracketType[] = TAX_BRACKETS_MOCK;

    const getTotalTax = (taxBrackets: TaxBracketWithAmountType[]) =>
      taxBrackets.reduce((acc, item) => {
        return acc + item.marginAmount;
      }, 0);

    it('should return correct tax bracket with calculated margin amount when income falls in the first bracket', () => {
      const response = getCalculatedTax(48000, mockTaxBracket);
      const totalTax = response && getTotalTax(response?.calculatedTaxBrackets);

      expect(response).toEqual({
        calculatedTaxBrackets:
          INCOME_48000_TAX_BRACKETS_WITH_MARGIN_AMOUNT_MOCK,
        totalTax,
      });
    });
    it('should return correct tax bracket with calculated margin amount when income falls in the middle of bracket', () => {
      const response = getCalculatedTax(150000, mockTaxBracket);
      const totalTax = response && getTotalTax(response?.calculatedTaxBrackets);

      expect(response).toEqual({
        calculatedTaxBrackets:
          INCOME_150000_TAX_BRACKETS_WITH_MARGIN_AMOUNT_MOCK,
        totalTax,
      });
    });
    it('should return correct tax bracket with calculated margin amount when income falls in the biggest bracket', () => {
      const response = getCalculatedTax(250000, mockTaxBracket);
      const totalTax = response && getTotalTax(response?.calculatedTaxBrackets);

      expect(response).toEqual({
        calculatedTaxBrackets:
          INCOME_250000_TAX_BRACKETS_WITH_MARGIN_AMOUNT_MOCK,
        totalTax,
      });
    });

    it('should return undefined when tax bracket is empty ', () => {
      const response = getCalculatedTax(48000, []);
      expect(response).toEqual(undefined);
    });
  });
});
