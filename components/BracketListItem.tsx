import React from 'react';
import { TaxBracketWithAmountType } from '@/utils/tax.type';
import { PriceFormatter } from '@/utils/commons';

interface BracketListItemProps {
  bracket: TaxBracketWithAmountType;
}
const BracketListItem = ({ bracket }: BracketListItemProps) => {
  const { max, min, rate, marginAmount } = bracket;

  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {max ? `${min} - ${max}` : `${min} ~`}
      </th>
      <td className="px-6 py-4">{rate}</td>
      <td className="px-6 py-4">{PriceFormatter(marginAmount)}</td>
    </tr>
  );
};

export default BracketListItem;
