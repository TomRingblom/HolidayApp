import { useState,useCallback,useEffect } from "react";
import "./Search.css";
import useHttp from "../hooks/use-http";


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
        <div>
            <input type="text" onChange={e => setQuery(e.target.value.toLocaleLowerCase())}></input>
            <div className="country-card">
                {filteredCountry.slice(0, 10).map((value) =>(
                    <div className="country-box" key={value.name.common}>{value.name.common} <button className="country-search-button" id={value.cca2} onClick={props.onShowDays}>See Country Holidays</button>
                    </div>

                ))};

            </div>
        </div>

    )

}

export default Search;