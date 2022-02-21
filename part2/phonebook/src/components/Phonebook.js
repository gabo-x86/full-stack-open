import React from "react";

const Phonebook = (props) =>{

    const addNewPerson = (event) =>{
        event.preventDefault();

        if(props.persons.filter((person)=> person.name===props.newPerson.name).length > 0){
            alert(`${props.newPerson.name} is already added to phonebook`)
        }else{
            const newRegister = {
              name: props.newPerson.name,
              number: props.newPerson.number,
            }
            props.handleSetPersons(props.persons.concat(newRegister));
            props.handleSetNewPerson({
                name: '',
                number: '',
            });
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