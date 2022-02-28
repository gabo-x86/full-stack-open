import React from "react";
import Button from "./Button";
import phonebookService from '../services/phonebook';

const Names = (props) =>{

    const filteredPersons = () =>{
        return props.persons.filter((person)=> person.name.toUpperCase().includes(props.searchedPerson.toUpperCase()));
    }

    const deleteName = (id) =>{
        const person = props.persons.find(p => p.id===id);
        if(window.confirm(`Delete ${person.name}?`)) phonebookService
                                            .del(id)
                                            .then(res =>{
                                                const filteredElements = props.persons.filter(p => p.id!==id);
                                                props.setPersons(filteredElements);
                                            });
    }

    if(props.searchedPerson===''){
        return(
            <>  
            {props.persons.map((person)=>{
                return <p key={person.name}>{person.name} {person.number} 
                            <Button handler={()=>deleteName(person.id)} label={'delete'}/>
                       </p>
            })
            }     
            </>
        )
    }else{
        return(
            <>
            {filteredPersons().map((person)=>{
                return <p key={person.name}>{person.name} {person.number} 
                            <Button handler={()=>deleteName(person.id)} label={'delete'}/>
                        </p>
            })
            }
            </>
        )
    }
    
}


export default Names;