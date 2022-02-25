import React, {useState} from 'react';
import Searchbar from './components/SearchBar';
import Results from './components/Results';



function App() {
  const [ctrySearched, setCtrySearched] = useState('');
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);
  
  return(
    <>
      <Searchbar ctrySearched={ctrySearched} setCtrySearched={setCtrySearched} setCountries={setCountries} />
      <Results ctrySearched={ctrySearched} countries={countries} setCountry={setCountry} country={country}/>
    </>
  )
  
}

export default App;
