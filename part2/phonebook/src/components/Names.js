import React from "react";

const Names = (props) =>{

    const filteredPersons = () =>{
        return props.persons.filter((person)=> person.name.toUpperCase().includes(props.searchedPerson.toUpperCase()));
    }

    if(props.searchedPerson==''){
        return(
            <>  
            {props.persons.map((person)=>{
                return <p key={person.name}>{person.name} {person.number}</p>
            })
            }     
            </>
        )
    }else{
        return(
            <>
            {filteredPersons().map((person)=>{
                return <p key={person.name}>{person.name} {person.number}</p>
            })
            }
            </>
        )
    }
    
}


export default Names;