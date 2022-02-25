import React from "react";
import Country from './Country'
import Weather from './Weather';

const Results = (props) =>{

    const showCountry = (country) =>{
        props.setCountry(
                        <>
                            <Country data={country}/>
                            <Weather country={country}/>
                        </>
        )
    }

    if(props.countries[0] === undefined){        
        return <p>Your search doesn't match</p>

    }if(props.countries.length > 10){
        return <p>Too many matches, specify another filter</p>

    }else if(props.countries.length === 1){
        return(
            <>
                <Country data={props.countries[0]}/>
                <Weather country={props.countries[0]}/>
            </>
        )
    }else{
        return(
            <>
            <ul>
                {
                    props.countries.map((country)=>{                        
                        return <li key={country.name.common}>{country.name.common} 
                                    <button onClick={()=>showCountry(country)}>show</button>
                                </li>
                    })
                }
            </ul>
            {props.country}            
            </>
        )
    }
    
}


export default Results;
