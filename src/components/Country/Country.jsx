import { useState } from 'react';
import './Country.css'
const Country = ({ country }) => {
    const { name, flags, population, area, cca3 } = country;
    const[visited, setVisited] = useState(false); //the default value of if I visited any country is false.
    // console.log(country);

    const handleVisited = () => {
        // setVisited(true);
        setVisited(!visited)
    }


    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited? 'purple' : 'white'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" style={{width: '200px', height: '100px'}} />
            <p>Population: {population} </p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3} </small></p>
            <button onClick={handleVisited}>{visited ? 'Visited': 'Did not visit'}</button>
            {/* {visited && 'I have visited this country'} */}
            {visited? "I have visited this country" : 'I will visit this country, inshaAllah.'}
        </div>
    );
};

export default Country;