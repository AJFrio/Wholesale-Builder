import { COUNTRY_DATA } from '../data/countryData'
import { CONTAINER_CLASSES, TEXT_CLASSES, SELECT_CLASSES } from '../styles/classes'

function CountrySelector({ selectedCountry, onCountryChange }) {
  return (
    <div className={CONTAINER_CLASSES.card}>
      <h2 className={TEXT_CLASSES.heading}>Select Country</h2>
      <select 
        value={selectedCountry}
        onChange={(e) => onCountryChange(e.target.value)}
        className={SELECT_CLASSES.large}
      >
        <option value="">Choose a country...</option>
        {Object.entries(COUNTRY_DATA).map(([key, country]) => (
          <option key={key} value={key}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CountrySelector 