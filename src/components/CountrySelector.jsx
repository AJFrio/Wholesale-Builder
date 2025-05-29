import { COUNTRY_DATA } from '../data/countryData'

function CountrySelector({ selectedCountry, onCountryChange }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
      <h2 className="text-xl font-semibold text-white mb-4">Select Country</h2>
      <select 
        value={selectedCountry}
        onChange={(e) => onCountryChange(e.target.value)}
        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Choose a country...</option>
        {Object.entries(COUNTRY_DATA).map(([key, country]) => (
          <option key={key} value={key} className="bg-slate-800">
            {country.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CountrySelector 