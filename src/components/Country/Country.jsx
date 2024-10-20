import { useState } from 'react';
import './Country.css'
import CountryDetail from '../Country-Detail/CountryDetail';
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false); //the default value of if I visited any country is false.
    // console.log(country);

    const handleVisited = () => {
        // setVisited(true);
        setVisited(!visited)
    }

    // console.log(handleVisitedCountry);

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{ color: visited ? 'purple' : 'white' }}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" style={{ width: '200px', height: '100px' }} />
            <p>Population: {population} </p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3} </small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button> <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Did not visit'}</button><br />
            {/* {visited && 'I have visited this country'} */}
            {visited ? "I have visited this country" : 'I will visit this country, inshaAllah.'}
            <hr />
            <CountryDetail
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}>

            </CountryDetail>
        </div>
    );
};


export default Country;