import { useState,useEffect  } from 'react'
import Country from './Country'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [countryInfo,setCountryInfo]=useState(null)

  async function fetchData (query){
    try {
      const response=await fetch(`https://countries.trevorblades.com/`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          query:query
        })
      })

      const result=await response.json();

     // console.log(result.data);
      return result.data;
    

    } catch (error) {
     // console.log(error)
    }
    
  }

  async function fetchCountries(){
    const CountriesList= await fetchData(`query{
      countries{
        code
        name
      }
      }`);
      setData(CountriesList.countries)
  }

  useEffect(()=>{
      fetchCountries();
  },[])




  async function countryData(code){
    const Countdata= await fetchData(`query{
  country(code:"${code}"){
    name
    capital
    currency
    languages{
			name
    }
    emoji
    states{
			name
    }
}
}`)
      console.log(Countdata.country)

      setCountryInfo(Countdata.country)
  }



  return (
    <>
    <div className='container'>
      <h1>Countries Information</h1>

    <label htmlFor="countries">Select a Country: 
    <select name="countries" defaultValue={""}
        onChange={(e)=>countryData(e.target.value)}
    >Countries
    <option value="" >select</option>
    {data && data.map((country)=>{
        return <option key={country.code} value={country.code}>{country.name}</option>
      })}
    </select>
    </label>
     
      <div className='country-info'>
      <Country countryInfo={countryInfo && countryInfo}/>
      </div>
      </div>
    </>
  )
}

export default App
