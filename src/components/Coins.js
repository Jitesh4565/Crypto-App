import React from "react";
import{useState,useEffect} from "react";
import CoinCard from "./CoinCard";

const Coins=()=>{

    const[coinInfo,setCoinInfo]=useState(null);

    useEffect(()=>{
        fetchCoin();
    },[]);

    const fetchCoin=async()=>{
       try{
           const data= await fetch("https://corsproxy.io/?https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
          const json= await data.json();
          console.log(json);
            setCoinInfo(json);
        }
       catch(error){
           console.error("Error Fetching Coins",error);
        }
    };
    
    if (!coinInfo || !coinInfo.length) return <h1>Loading..</h1>;

      return(
        <div className="tables">
         <div className="Cards">
            {coinInfo.map((coin)=>(
                <CoinCard key={coin.id} coin={coin}/>
            ))}
         </div>
        <div className="horizontal-line"></div>
       </div> 
      )
}

export default Coins;