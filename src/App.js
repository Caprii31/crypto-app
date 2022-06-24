import { useState , useEffect } from 'react'
import { useGetCryptoQuery } from './services/cryptoApi'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
