import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";

function App() {

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchCountries = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch countries");
        }

        const data = await res.json();
        setCountries(data);
        setFilteredCountries(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();

  }, []);

  const handleSearch = (query) => {
    const result = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredCountries(result);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <h1 className="text-5xl font-bold text-center py-6">
        Country Explorer
      </h1>

      <SearchBar onSearch={handleSearch} />

      {loading && (
        <p className="text-center text-lg mt-10">Loading countries...</p>
      )}

      {error && (
        <p className="text-center text-red-500 mt-10">{error}</p>
      )}

      {!loading && !error && (
        <CountryList countries={filteredCountries} />
      )}

    </div>
  );
}

export default App;