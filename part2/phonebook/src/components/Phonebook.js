import React from "react";
import phonebookService from '../services/phonebook';

const Phonebook = (props) =>{

    const addNewPerson = (event) =>{
        event.preventDefault();
        const person = props.persons.find(p => p.name === props.newPerson.name);
        const newRegister = {
            name: props.newPerson.name,
            number: props.newPerson.number,
        }
        if(person !== undefined){
            if(window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`)){
                phonebookService
                                .update(person.id, newRegister)
                                .then(res =>{
                                    const personsUpdated = props.persons.map(p => p.id===res.id ? res : p);
                                    props.handleSetPersons(personsUpdated);
                                })
                                .catch(err =>{
                                    props.handleSetNotification('information was already removed');
                                    props.handleSetPersons(props.persons.filter(p => p.id !== person.id));
                                    setTimeout(()=>{
                                        props.handleSetNotification(null);
                                    },5000);
                                });
            }  
            //alert(`${props.newPerson.name} is already added to phonebook`)
        }else{            
            phonebookService.create(newRegister).then(res =>{
                props.handleSetPersons(props.persons.concat(res));

                props.handleSetNotification('Added');
                setTimeout(()=>{
                    props.handleSetNotification(null);
                    props.handleSetNewPerson({
                        name: '',
                        number: '',
                    });
                },5000);
            })
        }
    }

    const handleNameChange = (event) =>{
        props.handleSetNewPerson({
            name: event.target.value,
            number: props.newPerson.number,
        });
    }

    const handleNumberChange = (event) =>{
        props.handleSetNewPerson({
            name: props.newPerson.name,
            number: event.target.value,
        });
    }

    return(
        <>        
        <form onSubmit={addNewPerson}>
            <div>
            name: <input value={props.newPerson.name} onChange={handleNameChange}/>
            <br />
            number: <input value={props.newPerson.number} onChange={handleNumberChange}/>
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
        </>

    )
}


export default Phonebook;