import React from 'react'
import './index.scss'
import Crypto from '../Crypto/Crypto'
import { useEffect, useState } from 'react'
import { useGetCryptoQuery } from '../../services/cryptoApi'
import { Link } from 'react-router-dom'
import LinearProgress from '@mui/material/LinearProgress';


function CryptoCurrencies({ simplified }) {

    const [cryptos , setCrypto] = useState([])
    const cryptoCount = simplified ? 12 : 100
    const { data: cryptoList, isFetching } = useGetCryptoQuery(cryptoCount)
    const [searched, setSearched] = useState('') 
    const [loading , setLoading] = useState(true)

    useEffect(() => {

        setCrypto(cryptoList?.data?.coins)
        const filteredCrypto = cryptoList?.data?.coins.filter(crypto => crypto.name.toLowerCase().includes(searched))
        setCrypto(filteredCrypto)
       if(!isFetching) setLoading(false)

    },[cryptoList,searched])

    
    const isSearched = (e)=>{
        e.preventDefault()
        setTimeout(()=>{
        setSearched(e.target.value)
        },500)
    }


  return loading ? (!simplified && <LinearProgress />) : 
  (
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