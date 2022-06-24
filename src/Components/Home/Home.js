import React from 'react'
import './index.scss'
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CryptoCurrencies from '../CryptoCurrencies/CryptoCurrencies'
import { useGetCryptoQuery } from '../../services/cryptoApi'
import millify from 'millify'
import { Link } from 'react-router-dom'
import LinearProgress from '@mui/material/LinearProgress';
import { useState, useEffect } from 'react'




function Home() {

  const { data, isFetching }  = useGetCryptoQuery()
  const [loading , setLoading] = useState(true)
  const stats = data?.data?.stats

  const pageLoading = () => {
    setTimeout(() => {
      setLoading(false)
    },500)
  }

  useEffect(()=>{
    pageLoading()
  },[])

  

  console.log(stats)
  console.log(data)
  return loading ? (<LinearProgress />) : 

    (
        <div className="home">
          <div className="home-stats">
            <div className="stats-title">
              <ShowChartIcon style={{ color : '#0582CA' }} sx={{ fontSize : '30px' }}/>
              <h1>global cryptocurrencies stats</h1>
            </div>
            <div className="stats-container">
              <div className="stat-details">
                <p>total cryptocurrencies</p>
                <span>{millify(stats.total)}</span>
              </div>
              <div className="stat-details">
                <p>total exchanges</p>
                <span>{stats.totalExchanges}</span>
              </div>
              <div className="stat-details">
                <p>total market cap</p>
                <span>$ {millify(stats.totalMarketCap)}</span>
              </div>
              <div className="stat-details">
                <p>total 24h volume</p>
                <span>$ {millify(stats.total24hVolume)}</span>
              </div>
              <div className="stat-details">
                <p>total markets</p>
                <span>{millify(stats.totalMarkets)}</span>
              </div>
            </div>
          </div>
          <div className="home-cryptos">
            <div className="cryptos-title">
              <DonutSmallIcon style={{ color : '#0582CA'}} sx={{fontSize: '30px'}}/>
              <h1>Top 10 cryptourrencies</h1>
            </div>
            <Link to='/cryptocurrencies' className='home-button'>see all</Link>
            

          </div>
          <CryptoCurrencies simplified />
        </div>
    )
  
}

export default Home