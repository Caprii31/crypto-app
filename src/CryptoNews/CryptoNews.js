import React from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptoQuery } from '../services/cryptoApi'
import { useState } from 'react'
import News from '../Components/News/News'
import './index.scss'
 


function CryptoNews({ simplified }) {

  const { data: cryptoList } = useGetCryptoQuery()
  const [ cryptoCategory, setCryptoCategory] = useState('cryptocurrency')
  const count = simplified ? 12 : 100
  const { data: cryptoNews } = useGetCryptoNewsQuery({newsCategory: cryptoCategory,count })

  const handleSelect = (e)=>{
    e.preventDefault()
    setCryptoCategory(e.target.value)
  }  


  console.log(cryptoCategory)
  return (
    <div className="crypto-news">
      {!simplified && (
        <select name="cryptcurrenciest" id="" className="select-crypto" onChange={(e)=> handleSelect(e)}>
          <option value="cryptocurrency" className='default-select'> choose crypto news</option>
          {cryptoList?.data?.coins?.map(cur => (
            <option value={cur.name} key={cur.uuid}>{cur.name}</option>
          ))}
        </select>)}
      <div className="crypto-news-container">
          {cryptoNews?.value.map((news , index) => (
            <News cryptoNews={news} key={index} />
          ))}
      </div>
    </div>
  )
}

export default CryptoNews