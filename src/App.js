
import './App.css';
import React,{ useState } from 'react';
import { search } from './api/apiService';

function App() {
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState('us');
  const [language, setLanguage] = useState('lang_en');
  const [numResults, setNumResults] = useState(10);
  const [startIndex, setStartIndex] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await search(query, country, language, numResults, startIndex);
      setSearchResults(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
    console.log("json data",searchResults)
  };
      // console.log("json data",searchResults)

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter search query"
      />
      <button onClick={handleSearch} disabled={loading}>Search</button>

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      {/* {searchResults && searchResults.map((result, index) => (
        <div key={index}> */}
          {/* Display search results here */}
        {/* </div>
      ))} */}
    </div>
  );
}

export default App;

