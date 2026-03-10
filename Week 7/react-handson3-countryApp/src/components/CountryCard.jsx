function CountryCard({ country }) {

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">

      <img
        src={country.flags.png}
        alt="flag"
        className="w-full h-40 object-cover rounded"
      />

      <h2 className="text-lg font-bold mt-3">
        {country.name.common}
      </h2>

      <p className="text-sm mt-2">
        <span className="font-semibold">Capital:</span>{" "}
        {country.capital?.[0]}
      </p>

      <p className="text-sm">
        <span className="font-semibold">Population:</span>{" "}
        {country.population.toLocaleString()}
      </p>

      <p className="text-sm">
        <span className="font-semibold">Region:</span>{" "}
        {country.region}
      </p>

    </div>
  );
}

export default CountryCard;