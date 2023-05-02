import BracketListItem from './BracketListItem';
import { TaxBracketWithAmountType } from '@/utils/tax.type';

interface BracketListItemProps {
  taxBrackets: TaxBracketWithAmountType[];
}

export const BracketList = ({ taxBrackets }: BracketListItemProps) => {
  return (
    <div className="relative overflow-x-auto mt-8">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Income tax brackets
            </th>
            <th scope="col" className="px-6 py-3">
              Tax rates
            </th>
            <th scope="col" className="px-6 py-3">
              Taxable Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {taxBrackets.map((bracket) => {
            return (
              <BracketListItem
                key={`${bracket.max}-${bracket.min}`}
                bracket={bracket}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BracketList;
