import React from 'react'
import './index.scss'
import image from '../../utils/images/cryptocurrency.png'
import{ NavLink } from 'react-router-dom'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={image} alt="" />
            <h2 className="logo-text">cryptoverse</h2>
        </div>
        <div className="nav-list-items">
            <NavLink to="/" className="nav-link">
                <CottageOutlinedIcon />
                <span> Home </span>
            </NavLink>
            <NavLink to="/cryptocurrencies" className="nav-link">
                <AddCardOutlinedIcon />
                <span>crypocurrency</span>
            </NavLink>
            <NavLink to="/exchange" className="nav-link">
                <CurrencyExchangeOutlinedIcon />
                <span>exchange</span>
            </NavLink>
            <NavLink to="/news" className="nav-link">
                <ArticleOutlinedIcon />
                <span>news</span>
            </NavLink>
        </div>

    </div>
  )
}

export default Navbar