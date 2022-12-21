/**
 *  fetch fuction behaves identically to the native fetch web API
 **/

export const load = async ({ fetch }) => {
  const res = await fetch('https://dummyjson.com/quotes?limit=10')
  const quotesData = await res.json()
  const quotes = quotesData.quotes
  return { quotes }
}
