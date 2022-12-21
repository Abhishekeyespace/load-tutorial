/**
 *  fetch fuction behaves identically to the native fetch web API
 *  Here, initial fetch is making a server side call, but then it makes
 *  a client side call to the same endpoint
 */

export const load = async ({ fetch }) => {
  /** PARALLEL LOADING
   * Top-level promises will be awaited,
   * which makes it easy to return multiple promises
   *  without creating a waterfall:
   */
  console.log('This will appear on console browser')
  const fetchQuotes = async () => {
    const quotesRes = await fetch('https://dummyjson.com/quotes?limit=10')
    const quotesData = await quotesRes.json()
    return quotesData.quotes
  }

  const fetchUsers = async () => {
    const usersRes = await fetch('https://dummyjson.com/users?limit=10')
    const usersData = await usersRes.json()
    return usersData.users
  }

  return {
    quotes: fetchQuotes(),
    users: fetchUsers(),
  }
}
