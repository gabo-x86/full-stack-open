import React, {useState, useEffect} from "react";
import Names from './components/Names';
import Phonebook from "./components/Phonebook";
import FilterBar from "./components/FilterBar";
import axios from "axios";
import phonebookService from './services/phonebook';



const App = () =>{
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState(
    {
      name: '',
      number: '',
    },
  );
  const [searchedPerson, setSearchedPerson] = useState('');

    useEffect(() =>{
      phonebookService
                      .getAll()
                      .then(res => setPersons(res));
    }, []);
  
  return(
    <div>   
      <h2>Phonebook</h2> 
      <FilterBar searchedPerson={searchedPerson} handleSetSearchedPerson={setSearchedPerson}/>

      <h2>Add a new</h2>
      <Phonebook persons={persons} handleSetPersons={setPersons} 
                newPerson={newPerson} handleSetNewPerson={setNewPerson} />

      <h2>Numbers</h2>
      <Names persons={persons} searchedPerson={searchedPerson}/>
    </div>

  )
}

export default App;