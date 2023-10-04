import CountryCard from './CountryCard'

function CardContainer({countries, handleCountryClick}) {
    return <div className="cardContainer">
        {countries.map((country) => <CountryCard country={country} handleClick={handleCountryClick}/>)}
    </div>
}

export default CardContainer;