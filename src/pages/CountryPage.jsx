import { useParams, useNavigate } from 'react-router-dom'
import useCountry from '../hooks/useCountry'
import '../styles/App.css'

function CountryPage() {
  const { code } = useParams()
  const navigate = useNavigate()
  const { country, loading, error } = useCountry(code)

  if (loading) {
    return <div className="page-status">Loading country details...</div>
  }

  if (error) {
    return (
      <div className="page-status page-status--error">
        Error: {error}
      </div>
    )
  }

  if (!country) {
    return <div className="page-status">Country not found</div>
  }

  const {
    name,
    flags,
    population,
    region,
    subregion,
    capital,
    languages,
    currencies,
    borders,
  } = country

  const languageList = languages ? Object.values(languages) : []
  const currencyList = currencies
    ? Object.values(currencies).map((c) => c.name)
    : []

  return (
    <div className="country-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="country-page__layout">
        <img
          src={flags.svg}
          alt={`Flag of ${name.common}`}
          className="country-page__flag"
        />

        <div className="country-page__info">
          <h2 className="country-page__name">{name.common}</h2>
          <p className="country-page__official">{name.official}</p>

          <div className="country-page__details">
            <div className="country-page__column">
              <p>
                <span>Population:</span> {population.toLocaleString()}
              </p>
              <p>
                <span>Region:</span> {region}
              </p>
              <p>
                <span>Subregion:</span> {subregion ?? 'N/A'}
              </p>
              <p>
                <span>Capital:</span> {capital?.[0] ?? 'N/A'}
              </p>
            </div>

            <div className="country-page__column">
              <p>
                <span>Languages:</span> {languageList.join(', ') || 'N/A'}
              </p>
              <p>
                <span>Currencies:</span> {currencyList.join(', ') || 'N/A'}
              </p>
            </div>
          </div>

          <div className="country-page__borders">
            <p>
              <span>Borders:</span> {borders && borders.length > 0 ? '' : 'None'}
            </p>
            {borders && borders.length > 0 && (
              <div className="border-badges">
                {borders.map((border) => (
                  <span key={border} className="border-badge">
                    {border}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryPage
