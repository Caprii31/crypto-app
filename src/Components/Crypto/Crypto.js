import React from 'react'
import './index.scss'
import millify from 'millify'
import { Link } from 'react-router-dom'

function Crypto({ cryptoCur }) {


  
   
  return (
    <Link className='crypto-box' to={`/crypto/${cryptoCur.uuid}`}>
        <div className="upper-box">
           <span>{`${cryptoCur.rank}. ${cryptoCur.name}`}</span>
            <img src={cryptoCur.iconUrl} alt="" />
        </div>

        <div className="lower-box">
            <div className="box-text">
                <p><span>price :</span> {millify(cryptoCur.price)}</p>
                <p><span>market cap :</span> {millify(cryptoCur.marketCap)}</p>
                <p><span>daily change :</span> {cryptoCur.change}</p>
            </div>
        </div>
    </Link>
  )
}

export default Crypto