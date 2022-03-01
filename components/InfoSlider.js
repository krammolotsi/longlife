import Link from 'next/link';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useState, useEffect } from 'react';
import CalculateTotalMonthlyPremiums from './cloudFirestore/CalculateTotalMonthlyPremiums';
import CalculateOutstandingPremiums from './cloudFirestore/CalculateOutstandingPremiums';
import CalculatePreviousMonth from './cloudFirestore/CalculatePreviousMonth';

function InfoSlider() {
  return (
    <div className="bg-white rounded-xl w-full flex-shrink-0 md:flex-shrink ">
      {/*overflow-hidden add above*/}
      <div className="flex space-x-4 md:space-x-10 p-2">
        <Link href="/premium/monthlypremiums">
          <div className="bg-white w-1/3 shadow-md border-gray-light hover:text-orange-primary hover:bg-orange-primary rounded-xl flex flex-col md:flex-row items-center px-3 py-5 md:p-5 space-x-0 md:space-x-5">
            <div className="bg-white p-2 rounded-lg text-sky-400 w-full md:w-auto hover:text-white hover:bg-orange-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>

            <div>
              <span className="font-semibold block uppercase text-xs text-gray-dark tracking-wider">
                Monthly Premiums
              </span>
              <span className="font-semibold text-xl md:text-2xl text-gray-dark">
                <CalculateTotalMonthlyPremiums />
              </span>
            </div>
          </div>
        </Link>
        <Link href="/premium/outstandingpremiums">
          <div className="bg-white w-1/3 shadow-md border-gray-light hover:text-orange-primary hover:bg-orange-primary rounded-xl flex flex-col md:flex-row items-center px-3 py-5 md:p-5 space-x-0 md:space-x-5">
            <div className="bg-white p-2 rounded-lg text-sky-400 w-full md:w-auto hover:text-white hover:bg-orange-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <div>
              <span className="font-semibold block uppercase text-xs text-gray-dark tracking-wider">
                Outstanding Premiums
              </span>
              <span className="font-semibold text-xl md:text-2xl text-gray-dark">
                <CalculateOutstandingPremiums />
              </span>
            </div>
          </div>
        </Link>
        <Link href="/premium/previousmonth">
          <div className="bg-white w-1/3 shadow-md border-gray-light hover:text-orange-primary hover:bg-orange-primary rounded-xl flex flex-col md:flex-row items-center px-3 py-5 md:p-5 space-x-0 md:space-x-5">
            <div className="bg-white p-2 rounded-lg text-sky-400 w-full md:w-auto hover:text-white hover:bg-orange-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <div>
              <span className="font-semibold block uppercase text-xs text-gray-dark tracking-wider">
                Previous Month
              </span>
              <span className="font-semibold text-xl md:text-2xl text-gray-dark">
                <CalculatePreviousMonth />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default InfoSlider;
