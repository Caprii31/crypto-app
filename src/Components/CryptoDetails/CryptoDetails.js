import React from 'react'
import { useParams } from 'react-router-dom'

function CryptoDetails() {

    const { coinId } = useParams()
    
  return (
    <div>{coinId}</div>
  )
}

export default CryptoDetails