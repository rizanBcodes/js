//endpoint
const movie_all = "https://rizanbcodes.github.io/data/movie-store.json"

const fetchMovies = async () => {
    const res = await fetch(movie_all);
    const parsedRes = await res.json()
    console.log(parsedRes)
}

fetchMovies()
