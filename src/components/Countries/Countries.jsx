import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(error => console.error("Error fetching countries: ", error));
    }, [])

    const handleVisitedCountry = country => {
        console.log('Add this to your visited country.');
        // visitedCountries.push(country); this will not work because visitedCountries is immutable in react. 
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
        console.log(country);
    }

    const handleVisitedFlags = flag => {
        console.log('flag adding');
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags)
    }

    // remove item from an array in a state
    // use filter to select all the elements except the one you want to remove.

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* visited countries */}
            <div>
                <h3>Visited Countries: {visitedCountries.length} </h3>
                <ul>
                    {
                        visitedCountries.map(country => <li>{country.name.common}</li>)
                    }
                </ul>
            </div>

            {/* display flags */}
            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                    // idx = index , map takes 3 parameters. One is index.
                }
            </div>

            {/* display countries */}
            <div className="country-container">
            {
                countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountry = {handleVisitedCountry} handleVisitedFlags={handleVisitedFlags}></Country>)
            }
            </div>
        </div>


    )
};

export default Countries;