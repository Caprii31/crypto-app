import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const cryptoHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_CRYPTO_API_HOST,
}

const createRequest = (url) => ({ url, headers: cryptoHeaders })


export const cryptoApi = createApi ({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_URL }),
    endpoints: (builder) => ({
        getCrypto : builder.query({
            query: (count) => count ? createRequest(`/coins?limit=${count}`) : createRequest('/coins')
        }),
    }),
})


export const { useGetCryptoQuery } = cryptoApi