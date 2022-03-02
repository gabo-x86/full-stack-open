import React, {useState, useEffect} from "react";
import Names from './components/Names';
import Phonebook from "./components/Phonebook";
import FilterBar from "./components/FilterBar";
import phonebookService from './services/phonebook';
import Notification from "./components/Notification";



const App = () =>{
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState(
    {
      name: '',
      number: '',
    },
  );
  const [searchedPerson, setSearchedPerson] = useState('');
  const [notification, setNotification] = useState(null);

    useEffect(() =>{
      phonebookService
                      .getAll()
                      .then(res => setPersons(res));
    }, []);
  
  return(
    <div>   
      <h2>Phonebook</h2> 
      <Notification notification={notification} person={newPerson}/>
      <FilterBar searchedPerson={searchedPerson} handleSetSearchedPerson={setSearchedPerson}/>

      <h2>Add a new</h2>
      <Phonebook persons={persons} handleSetPersons={setPersons} 
                newPerson={newPerson} handleSetNewPerson={setNewPerson} 
                handleSetNotification={setNotification}/>

      <h2>Numbers</h2>
      <Names persons={persons} searchedPerson={searchedPerson} setPersons={setPersons}/>
    </div>

  )
}

export default App;