import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const newsHeaders = {
    'X-BingApis-SDK' : process.env.REACT_APP_X_BINGAPIS_SDK,
    'X-RapidAPI-Host' : process.env.REACT_APP_RAPID_API_HOST_NEWS,
    'X-RapidAPI-Key' : process.env.REACT_APP_RAPID_API_KEY,
}

const createRequest = (url) => ({url,headers: newsHeaders});

export const cryptoNewsApi = createApi ({
    reducerPath : 'cryptoNewsApi',
    baseQuery : fetchBaseQuery ({ baseUrl : process.env.REACT_APP_NEWS_API_URL }),
    endpoints : (builder) => ({
        getCryptoNews : builder.query({
            query: ({ newsCategory, count }) => count ? createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`) : createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day`)
        })
    })
    
})


export const { 
    useGetCryptoNewsQuery
} = cryptoNewsApi