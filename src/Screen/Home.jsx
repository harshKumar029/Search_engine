import React, { useState } from 'react';
import { search ,imagesearch } from '../api/apiService';
import { Imgresult } from '../component/Imgresult';
import { Result } from '../component/Result';
// import jdata from '../g.json'
// import imgdata from '../img.json'

function Home() {
  const [query, setQuery] = useState('');
  // const [country, setCountry] = useState('us');
  // const [language, setLanguage] = useState('lang_en');
  // const [numResults, setNumResults] = useState(10);
  // const [startIndex, setStartIndex] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [searchimg, setSearchimg] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isclick, setIsclick] = useState(false);

  const handleSearch = async () => {
    // const jsonData = jdata;
    // const img = imgdata;

    // result search api
    try {
      setLoading(true);
      setError(null);
      const data = await search(query);
      setSearchResults(data);
    } catch (error) {
      setError(error.message);
    } 

    // image search api
      try {
      const newdata = await imagesearch(query);
      setSearchimg(newdata);
    } catch (error) {
      setError(error.message);
    }

    // setSearchimg(img);
    // setSearchResults(jsonData)
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  console.log("img_json_data", searchResults, searchimg)

  return (
    <div className='container'>
      <div className='search-buttons'>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        placeholder="Enter search query"
        />
        <button onClick={handleSearch} disabled={loading}>Search</button>
      </div>
      <div className='search-buttons'>
        <button style={{ backgroundColor: !isclick ? '#000000' : '' }} onClick={() => setIsclick(false)} disabled={loading}>All</button>
        <button style={{ backgroundColor: isclick ? '#000000' : '' }} onClick={() => setIsclick(true)} disabled={loading}>Images</button>
      </div>


      <div style={{ textAlign: 'center', }}>
        {loading && <p style={{ marginTop: '10%' }}>Working On it...</p>}
        {error && <p>Error: {error}</p>}
      </div>

      {/* <div className='card-container'>
        <Result {...searchResults} />
        <Imgresult {...searchimg} />
      </div> */}
      {/* 
      {searchResults.length>0 ? isclick ?<Imgresult {...searchResults} />: <Result {...searchResults}/>:''} */}
      {(isclick ? <Imgresult {...searchimg} /> : <Result {...searchResults} />)}
    </div>
  );
}

export default Home;

