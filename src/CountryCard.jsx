import { useEffect } from "react";
import Tilt from "react-parallax-tilt"

function CountryCard({country, handleClick}) {
    return (
        <Tilt glareEnable={true} glareBorderRadius="15px">
            <div key={country.country} className="countryCard" onClick={e => handleClick(country.country, country.touched)}>
                <img src={"https://flagcdn.com\/w80\/"+country.url+".png"} alt={country.country + " flag"} />
                <h3>{country.country}</h3>
                <p>{country.capital}</p>
            </div>
        </Tilt>
    )
}

export default CountryCard;