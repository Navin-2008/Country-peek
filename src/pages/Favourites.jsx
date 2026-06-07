import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'
import CountryCard from '../components/CountryCard'

function Favourites() {
  const { favourites } = useFavourites()

  if (favourites.length === 0) {
    return (
      <section className="home">
        <div className="home__status">
          <h2>No saved countries yet</h2>
          <p>Save a country from the home page to build your favourites list.</p>
          <Link to="/" className="back-btn">
            Browse Countries
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="home">
      <h2>Favourites</h2>
      <div className="cards-grid">
        {favourites.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </section>
  )
}

export default Favourites
