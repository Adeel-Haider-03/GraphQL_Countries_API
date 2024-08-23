import React from 'react'

function Country({countryInfo}) {

    if (!countryInfo) return null;

    return (
    <div>
        <h4>Country: <span>{countryInfo.name}({countryInfo.emoji})</span></h4>
        <h4>Capital: <span>{countryInfo.capital}</span></h4>
        <h4>Currency: <span>{countryInfo.currency}</span></h4>
        <h4>Languages: {countryInfo.languages.map((lang,idx)=>{
            return <span key={idx}> {lang.name} </span>
        })}</h4>
        <h4>States: {countryInfo.states.length!==0?countryInfo.states.map((state,idx)=>{
            return <h6 key={idx}>{state.name}</h6>
        }):"Data not available"}</h4>
    </div>
)
}

export default Country
