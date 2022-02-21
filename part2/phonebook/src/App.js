import React, {useState} from "react";
import Names from './components/Names';
import Phonebook from "./components/Phonebook";
import FilterBar from "./components/FilterBar";


const App = () =>{
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newPerson, setNewPerson] = useState(
    {
      name: '',
      number: '',
    },
  );
  const [searchedPerson, setSearchedPerson] = useState('');

  
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