import { useState , useEffect } from 'react'
import { useGetCryptoQuery } from './services/cryptoApi'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import CryptDetails from './Components/CryptoDetails/CryptoDetails'
import CryptoNews from './Components/CryptoNews/CryptoNews'
import CryptoCurrencies from './Components/CryptoCurrencies/CryptoCurrencies'
import { Link, Route, Routes} from 'react-router-dom'

function App() {  

  
  return (
    <div className="App">
      <Navbar />
      <div className="page-layout">
        <Routes>
          <Route exact path="/" element={<Home />}  />
          <Route exact path="/cryptocurrencies" element={<CryptoCurrencies />}  />
          <Route exact path="/news" element={<CryptoNews />} />
          <Route exact path='/crypto/:coinId' element = {<CryptDetails />} />
        </Routes>
      </div>
      <footer>
        <div className="footer-list">
          <Link to='/' className="footer-list-item">home</Link>
          <Link to='/cryptocurrencies' className="footer-list-item">cryptocurrencies</Link>
          <Link to='/exchanges' className="footer-list-item">exchanges</Link>
          <Link to='/news' className="footer-list-item">news</Link>
        </div>
        <p className='footer-text'>Copyright © 2021 cryptoverse inc. all rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
