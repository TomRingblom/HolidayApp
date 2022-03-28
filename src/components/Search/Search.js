import { useState,useCallback,useEffect } from "react";
import "./Search.css";
import useHttp from "../hooks/use-http";
import Card from "../UI/Card";


const Search = (props) => {
    const[query,setQuery] = useState("");
    const [countries, setCountries] = useState([]);
    const resFunction = useCallback((obj) => {
        setCountries(obj);
      }, []);
      const getFilteredCountry = (query, countries) => {
          return countries.filter((countryName) => countryName.name.common.toLocaleLowerCase().includes(query));
          
      };
      const filteredCountry = getFilteredCountry(query,countries);
    
      const { getRequest: getCountryInfo } = useHttp(resFunction);

      useEffect(() => {
        getCountryInfo({url: 'https://restcountries.com/v3.1/all', msg: 'Country information not found!'});
      }, [getCountryInfo])
    
    return (
        <Card>
            <input className="searchCountry" type="text" onChange={e => setQuery(e.target.value.toLocaleLowerCase())}></input>
                {filteredCountry.slice(0, 10).map((value) =>(
                    <div className="item" key={value.name.common}>
                    <h1 className="header">{value.name.common}</h1>
                    <div>
                        <button className="btn-see-country-holidays" id={value.cca2} onClick={props.onShowDays}>See Country Holidays</button>
                    </div>
                </div>
                ))}
        </Card>
    )

}

export default Search;