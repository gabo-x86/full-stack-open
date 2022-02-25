import React from "react";

const Results = (props) =>{
    if(props.countries[0] === undefined){
        
        return(
            <>
            <p>Your search doesn't match</p>
            </>
        )
    }if(props.countries.length > 10){
        return(
            <>
            <p>Too many matches, specify another filter</p>
            </>
        )
    }else if(props.countries.length === 1){
        return(
            <>
            <h1>{props.countries[0].name.common}</h1>
            <p>Capital: {props.countries[0].capital}</p>
            <p>Population: {props.countries[0].population}</p>

            <h2>Languages</h2>
            <ul>
                {
                    Object.values(props.countries[0].languages).map((lang)=>{
                        return <li key={lang}>{lang}</li>
                    })
                }
            </ul>
            <img src={props.countries[0].flags.svg} width='100' height='100'/>
            </>
        )
    }else{
        return(
            <>
            <ul>
                {
                    props.countries.map((country)=>{
                        return <li key={country.name.common}>{country.name.common}</li>
                    })
                }
            </ul>
            </>
        )
    }
    
}


export default Results;
