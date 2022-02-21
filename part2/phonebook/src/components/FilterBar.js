import React from "react";

const FilterBar = (props) =>{
    
    const handleFilterChange = (event) =>{
        props.handleSetSearchedPerson(event.target.value);
    }
    
    return(
        <>
        <label>Filter shown with <input value={props.searchedPerson} onChange={handleFilterChange} /></label>
        </>
    )
}


export default FilterBar;