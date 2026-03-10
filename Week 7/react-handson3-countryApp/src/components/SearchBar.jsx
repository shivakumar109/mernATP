import { useEffect, useRef } from "react";

function SearchBar({ onSearch }) {

  const inputRef = useRef(null);
  const timerRef = useRef(null);

  // autofocus when page loads
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;

    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      onSearch(value);
    }, 500);
  };

  return (
    <div className="flex justify-center mb-6">

      <input
        ref={inputRef}
        type="text"
        placeholder="Search country..."
        onChange={handleChange}
        className="border p-3 w-80 rounded shadow"
      />

    </div>
  );
}

export default SearchBar;