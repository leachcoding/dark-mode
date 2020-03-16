import React from "react";
import Chart from "./Chart";

const Charts = ({ coinData }) => {
  return (
    <div className="charts">
      {coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
          <h4>Current Price: {coin.current_price}</h4>
          <h4>Price Change 24h: {coin.price_change_24h} Change Percentage: {coin.price_change_percentage_24h}</h4>
          <h4>Market Cap: {coin.market_cap} Market Cap Change 24h: {coin.market_cap_change_24h} Change Percentage: {coin.market_cap_change_percentage_24h}</h4>
          <h4>Last Updated: {coin.last_updated}</h4>
        </div>
      ))}
    </div>
  );
};
export default Charts;
