import React from 'react'
import './index.scss'
import Crypto from '../Crypto/Crypto'
import { useEffect, useState } from 'react'
import { useGetCryptoQuery } from '../../services/cryptoApi'


function CryptoCurrencies({ simplified }) {

    const [cryptos , setCrypto] = useState([])
    const cryptoCount = simplified ? 12 : 100
    const { data: cryptoList, isFetching } = useGetCryptoQuery(cryptoCount)
    console.log()
    const [searched, setSearched] = useState('') 
    console.log(searched)


    useEffect(() => {

        setCrypto(cryptoList?.data?.coins)
        const filteredCrypto = cryptoList?.data?.coins.filter(crypto => crypto.name.toLowerCase().includes(searched))
        setCrypto(filteredCrypto)
      
       window.scrollTo(0, 0);


    },[cryptoList,searched])

    
    const isSearched = (e)=>{
        e.preventDefault()
        setTimeout(()=>{
        setSearched(e.target.value)
        },500)
    }


  return (
    <div className='cryptocurrencies'>
      {!simplified &&  (
          <form className="search-box" onChange = {((e) => isSearched(e))}>
              <button className="search-btn">search cryptos</button>
              <input type="text"  className='search-cryptos'/>
          </form>
      )}
      <div className="cryptos-container">
      {cryptos?.map(cryptoCur => ( 
        <Crypto key={cryptoCur.uuid} cryptoCur = {cryptoCur} />
      ))}
      </div>
    </div>
  )
    
  
}

export default CryptoCurrencies