import React, {useEffect} from "react";
import axios from 'axios';

const Searchbar = (props) =>{

    const searchCountry = (event) =>{
        props.setCtrySearched(event.target.value);        
    }

    useEffect(()=>{
        axios
            .get('https://restcountries.com/v3.1/name/'+props.ctrySearched)
            .then((response)=>{           
                props.setCountries(response.data);          
            })
            .catch((err)=>{
                props.setCountries([]);
            })

    },[props.ctrySearched])

    return(
        <>
        <label>Find countries <input value={props.ctrySearched} onChange={searchCountry} /> </label>   
        </>
    )
}

export default Searchbar;