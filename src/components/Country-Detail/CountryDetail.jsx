import CountryData from "../Country-Data/CountryData";

const CountryDetail = (props)  => {
     const {country, handleVisitedCountry, handleVisitedFlags} = props;
        return (
            <div>
                <h4>Country Details</h4>
                <hr />
                {/* <CountryData country={country}
                    handleVisitedCountry={handleVisitedCountry}
                    handleVisitedFlags={handleVisitedFlags}></CountryData> */}

                {/* another way: following */}

                <CountryData {...props}></CountryData>
            </div>
        );
}

export default CountryDetail;