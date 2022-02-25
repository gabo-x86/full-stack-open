import React from "react"

const Country = ({data}) =>{

    return(
        <>
            <h1>{data.name.common}</h1>
            <p>Capital: {data.capital}</p>
            <p>Population: {data.population}</p>

            <h2>Languages</h2>
            <ul>
                {
                    Object.values(data.languages).map((lang)=>{
                        return <li key={lang}>{lang}</li>
                    })
                }
            </ul>
            <img src={data.flags.svg} width='100' height='100'/>
        </>
    )
}

export default Country;