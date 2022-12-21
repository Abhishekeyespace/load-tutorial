import 'dotenv/config'

/**
 *  We have used +page.server.js to load data from server side
 *  We dont want to expose privae api key to client side
 *  This is also sutable for loading data from database
 * 
 */

export const load = async () => {
  console.log('This will never appear on console browser')
  const fetchMovies = async () => {
    const moviesRes = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.MOVIE_DB_API_KEY}`,
    )
    const moviesData = await moviesRes.json()
    return moviesData.results
  }
  return {
    movies: fetchMovies(),
  }
}
