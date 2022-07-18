import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import { Provider } from 'react-redux';

function News({ cryptoNews }) {

  

  return (
    <a className="crypto-news-box" href={cryptoNews?.url} target="_blank">
        <div className="upper-box">
          <h3>{cryptoNews?.name}</h3>
          <img src={cryptoNews?.image?.thumbnail?.contentUrl} alt="" />
        </div>
        <div className="lower-box">
          <p className="news-description">
            {cryptoNews?.description.substring(0,100)}
          </p>
          <div className="news-details">
            <p>{cryptoNews?.provider[0]?.name}</p>
            <p>{new Date(new Date() - new Date(cryptoNews?.datePublished)).getHours()} hours ago</p>
          </div>
        </div>
    </a>
  )
}

export default News