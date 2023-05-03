import { renderHook } from '@testing-library/react-hooks';
import { useTax } from '../useTax';
import { useFetch } from '../useFetch';

import {
  INCOME_150000_TAX_BRACKETS_WITH_MARGIN_AMOUNT_MOCK,
  TAX_BRACKETS_MOCK,
} from '@/utils/__mocks__/tax.mock';

jest.mock('../useFetch', () => ({
  useFetch: jest.fn(),
}));

const mockedUseFetch = useFetch as jest.Mock;

describe('useTax', () => {
  it('should return tax after fetching tax brackets', async () => {
    mockedUseFetch.mockImplementation(() => ({
      data: {
        tax_brackets: TAX_BRACKETS_MOCK,
      },
      error: undefined,
      isLoading: false,
    }));

    const expectedTaxResult = {
      calculatedTaxBrackets: INCOME_150000_TAX_BRACKETS_WITH_MARGIN_AMOUNT_MOCK,
      totalTax: 30991.780000000002,
    };

    const { result } = renderHook(() => useTax(150000, 2021));

    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(undefined);
    expect(result.current.tax).toStrictEqual(expectedTaxResult);
  });

  it('should return error if there is an error while fetching tax brackets', async () => {
    mockedUseFetch.mockImplementation(() => ({
      data: undefined,
      error: 'An error occurred while fetching the data.... retrying...',
      isLoading: true,
    }));

    const { result } = renderHook(
      () => useTax(10000, 0) // Invalid tax year
    );

    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBe(
      'An error occurred while fetching the data.... retrying...'
    );
    expect(result.current.tax).toBe(undefined);
  });
});
