import { TaxBracketWithAmountType } from '../tax.type';

export const TAX_BRACKETS_MOCK = [
  {
    max: 48535,
    min: 0,
    rate: 0.15,
  },
  {
    max: 97069,
    min: 48535,
    rate: 0.205,
  },
  {
    max: 150473,
    min: 97069,
    rate: 0.26,
  },
  {
    max: 214368,
    min: 150473,
    rate: 0.29,
  },
  {
    min: 214368,
    rate: 0.33,
  },
];

export const INCOME_48000_TAX_BRACKETS_WITH_MARGIN_AMOUNT_MOCK: TaxBracketWithAmountType[] =
  [
    {
      max: 48535,
      min: 0,
      rate: 0.15,
      marginAmount: 48000 * 0.15,
    },
    {
      max: 97069,
      min: 48535,
      rate: 0.205,
      marginAmount: 0,
    },
    {
      max: 150473,
      min: 97069,
      rate: 0.26,
      marginAmount: 0,
    },
    {
      max: 214368,
      min: 150473,
      rate: 0.29,
      marginAmount: 0,
    },
    {
      min: 214368,
      rate: 0.33,
      marginAmount: 0,
    },
  ];

export const INCOME_150000_TAX_BRACKETS_WITH_MARGIN_AMOUNT_MOCK: TaxBracketWithAmountType[] =
  [
    {
      max: 48535,
      min: 0,
      rate: 0.15,
      marginAmount: 48535 * 0.15,
    },
    {
      max: 97069,
      min: 48535,
      rate: 0.205,
      marginAmount: (97069 - 48535) * 0.205,
    },
    {
      max: 150473,
      min: 97069,
      rate: 0.26,
      marginAmount: (150000 - 97069) * 0.26,
    },
    {
      max: 214368,
      min: 150473,
      rate: 0.29,
      marginAmount: 0,
    },
    {
      min: 214368,
      rate: 0.33,
      marginAmount: 0,
    },
  ];

export const INCOME_250000_TAX_BRACKETS_WITH_MARGIN_AMOUNT_MOCK: TaxBracketWithAmountType[] =
  [
    {
      max: 48535,
      min: 0,
      rate: 0.15,
      marginAmount: 48535 * 0.15,
    },
    {
      max: 97069,
      min: 48535,
      rate: 0.205,
      marginAmount: (97069 - 48535) * 0.205,
    },
    {
      max: 150473,
      min: 97069,
      rate: 0.26,
      marginAmount: (150473 - 97069) * 0.26,
    },
    {
      max: 214368,
      min: 150473,
      rate: 0.29,
      marginAmount: (214368 - 150473) * 0.29,
    },
    {
      min: 214368,
      rate: 0.33,
      marginAmount: (250000 - 214368) * 0.33,
    },
  ];
