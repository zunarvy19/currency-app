import React, { useState, useEffect } from "react";
import axios from "axios";

const Maintable = () => {
  const [data, setData] = useState({});

  const selectedCurrencies = ["CAD", "EUR", "IDR", "JPY", "CHF", "GBP"];

  useEffect(() => {
    const getData = async () => {
      const API_KEY = process.env.REACT_APP_CURRENCY;
      const url = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${API_KEY}`;

      try {
        axios.get(url).then((response) => {
          setData(response.data.rates);
        });
      } catch (error) {
        console.error("error fetching data", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="relative overflow-x-auto my-5">
      <table className="w-full text-sm text-left text-white">
        <thead className="text-xs text-[#F2E5BF] uppercase bg-[#CB6040]">
          <tr>
            <th scope="col" className="px-6 py-3">
              Currency
            </th>
            <th scope="col" className="px-6 py-3">
              We Buy
            </th>
            <th scope="col" className="px-6 py-3">
              Exchange Rate
            </th>
            <th scope="col" className="px-6 py-3">
              We Sell
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).length > 0 ? (
            Object.keys(data)
              .filter((currency) => selectedCurrencies.includes(currency))
              .map((currency) => (
                <tr
                  key={currency}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {currency}
                  </th>
                  <td className="px-6 py-4">
                    {(data[currency] * 1.05).toFixed(4)}
                  </td>
                  <td className="px-6 py-4">{data[currency]}</td>
                  <td className="px-6 py-4">
                    {(data[currency] * 0.95).toFixed(4)}
                  </td>
                </tr>
              ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4 text-black">
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Maintable;
