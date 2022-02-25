import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Searchbar from './components/SearchBar';
import Results from './components/Results';



function App() {
  const [ctrySearched, setCtrySearched] = useState('');
  const [countries, setCountries] = useState([]);
  const [url, setUrl] = useState('')

  return(
    <>
      <Searchbar ctrySearched={ctrySearched} setCtrySearched={setCtrySearched} setCountries={setCountries} />
      <Results ctrySearched={ctrySearched} countries={countries} />
    </>
  )
  
}

export default App;
