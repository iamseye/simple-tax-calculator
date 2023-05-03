import React, { FormEventHandler } from 'react';
import { AVAILABLE_TAX_YEARS } from '..//utils/tax.const';

interface TaxFormType {
  onSubmitTaxForm: FormEventHandler<HTMLFormElement>;
}
const TaxForm = ({ onSubmitTaxForm }: TaxFormType) => {
  return (
    <div>
      <form onSubmit={onSubmitTaxForm}>
        <div>
          <label
            htmlFor="annualIncome"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your annual Income
          </label>
          <input
            type="number"
            id="annualIncome"
            name="annualIncome"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            htmlFor="yearSelect"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Select an option
          </label>
          <select
            id="yearSelect"
            name="yearSelect"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          >
            <option value="">Choose your tax year</option>
            {AVAILABLE_TAX_YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-4 mt-4 w-full"
          >
            Calculate the tax
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaxForm;
