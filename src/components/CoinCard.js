import React from "react";

const CoinCard=({coin})=>{
    return (
        <div className="Card">
            <img className="coin-logo"src={coin.image} alt={coin.name}/>
            <p>{coin.name}</p>
            <p>{coin.symbol.toUpperCase()}</p>
            <p>${coin.current_price}</p>
            <p>${coin.total_volume.toLocaleString()}</p>
            <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
            <p>Mkt Cap:${coin.market_cap.toLocaleString()}</p>
        </div>
    )
}
export default CoinCard;