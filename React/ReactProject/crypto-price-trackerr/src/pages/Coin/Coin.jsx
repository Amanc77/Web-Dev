import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../components/LineChart/LineChart";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const { currency } = useContext(CoinContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-8n9xZhH1qwShPfWPWtR35Qnh",
      },
    };

    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}`,
        options
      );
      const data = await res.json();
      setCoinData(data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch coin data.");
    }
  };

  const fetchHistoricalData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-8n9xZhH1qwShPfWPWtR35Qnh",
      },
    };

    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
        options
      );
      const data = await res.json();
      setHistoricalData(data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch historical data.");
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await fetchCoinData();
      await fetchHistoricalData();
      setLoading(false);
    };
    loadData();
  }, [currency]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-purple-700 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 mt-20">{error}</div>;
  }

  if (coinData && historicalData) {
    return (
      <div className="px-5">
        <div className="flex flex-col items-center gap-5 my-24">
          <img
            src={coinData.image.large}
            alt={`${coinData.name} logo`}
            className="w-24"
          />
          <p className="text-4xl font-semibold">
            {coinData.name} ({coinData.symbol.toUpperCase()})
          </p>
        </div>

        <div className="max-w-xl h-64 mx-auto">
          <LineChart historicalData={historicalData} />
        </div>

        <div className="max-w-xl mx-auto mt-12 flex flex-col gap-3">
          <ul className="flex justify-between border-b border-gray-500 py-2">
            <li className="font-medium">Crypto Market Rank</li>
            <li className="font-light">{coinData.market_cap_rank}</li>
          </ul>
          <ul className="flex justify-between border-b border-gray-500 py-2">
            <li className="font-medium">Current Price</li>
            <li className="font-light">
              {currency.symbol}{" "}
              {coinData.market_data.current_price[
                currency.name
              ].toLocaleString()}
            </li>
          </ul>
          <ul className="flex justify-between border-b border-gray-500 py-2">
            <li className="font-medium">Market Cap</li>
            <li className="font-light">
              {currency.symbol}{" "}
              {coinData.market_data.market_cap[currency.name].toLocaleString()}
            </li>
          </ul>
          <ul className="flex justify-between border-b border-gray-500 py-2">
            <li className="font-medium">24 Hour High</li>
            <li className="font-light">
              {currency.symbol}{" "}
              {coinData.market_data.high_24h[currency.name].toLocaleString()}
            </li>
          </ul>
          <ul className="flex justify-between border-b border-gray-500 py-2">
            <li className="font-medium">24 Hour Low</li>
            <li className="font-light">
              {currency.symbol}{" "}
              {coinData.market_data.low_24h[currency.name].toLocaleString()}
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return null;
};

export default Coin;
