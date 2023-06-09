import { FormEvent, useState } from 'react';

import Head from 'next/head';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Spinner from '@/components/Spinner';
import TaxForm from '@/components/TaxForm';
import BracketList from '@/components/BracketList';

import { useTax } from '@/hooks/useTax';
import { PriceFormatter } from '@/utils/commons';

export default function Home() {
  const [annualIncome, setAnnualIncome] = useState(0);
  const [taxYear, setTaxYear] = useState(0);
  const { tax, error, isLoading } = useTax(annualIncome, taxYear);

  const showResult = !isLoading && !error && tax;

  const onSubmitTaxForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const annualIncomeInput = form.elements.namedItem(
      'annualIncome'
    ) as HTMLInputElement;

    const yearSelect = form.elements.namedItem(
      'yearSelect'
    ) as HTMLInputElement;

    if (annualIncomeInput?.value) {
      setAnnualIncome(Number(annualIncomeInput?.value));
    }

    if (yearSelect?.value) {
      setTaxYear(Number(yearSelect?.value));
    }
  };

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Tax Calculation</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col align-middle p-16 min-h-[80vh]">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Calculate your tax information
        </h1>
        <TaxForm onSubmitTaxForm={onSubmitTaxForm} />
        {error && <div className="text-red-500 mb-4">{error?.message}</div>}
        {isLoading && <Spinner />}

        {showResult && (
          <>
            <h3>
              Results for your annual Income: {PriceFormatter(annualIncome)} in
              year {taxYear}
            </h3>
            {tax?.calculatedTaxBrackets?.length && (
              <BracketList taxBrackets={tax.calculatedTaxBrackets} />
            )}

            {tax?.totalTax !== null && (
              <div className="flex justify-around mb-4 mt-4 text-lg leading-none tracking-tight text-gray-900 md:text-xl lg:text-3xl">
                <div>Your total Tax Amount</div>
                <span className="underline underline-offset-3 decoration-8 decoration-blue-400">
                  {PriceFormatter(tax.totalTax)}
                </span>
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
