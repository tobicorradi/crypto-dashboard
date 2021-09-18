import React, { createContext, useState } from 'react'

export const StoreContext = React.createContext(null)

export default ({children}) =>{
  const [market, setMarket] = useState([]);
  const [currency, setCurrency] = useState("usd");
  const [favourite, setFavourite] = useState([]);
  const [loading, setLoading] = useState(false)

  const store = {
    markets: [market, setMarket],
    currencies: [currency, setCurrency],
    favourites: [favourite, setFavourite],
    loadings: [loading, setLoading]
  }
  return(
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  )
}