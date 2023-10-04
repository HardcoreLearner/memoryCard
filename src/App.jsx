import { useState } from 'react'
import './App.css'
import Header from './Header'
import Score from './Score'
import africanCountries from './countries.js'
import CardContainer from './CardContainer'
import Footer from './Footer'

function App() {
  function selectCountries(countries) {
    let container = [];
    for (let index = 0; index < 12; index++) {
      let element = Math.floor(Math.random() * countries.length);
      while (container.includes(element)) {
        element = Math.floor(Math.random() * countries.length);
      }
      container.push(element);      
    }
    for (let index = 0; index < container.length; index++) {
      const element = countries[container[index]];
      container[index] = element;
    }
    return container;
  }
  const [countries, setCountries] = useState(selectCountries(africanCountries));
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  
  function handleCardClick(cname, touched) {
    if (!touched) {
      const newCountries = [...countries];
      newCountries.map((country) => {
        if(country.country == cname) {
          country.touched = true;
        } else {
          return country;
        }
      })
      for (let i = newCountries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newCountries[i], newCountries[j]] = [newCountries[j], newCountries[i]];
      }
      setCountries(newCountries);
      incrementScore();
    } else {
      newGame();
    }
  }

  function incrementScore() {
    let newBestScore = bestScore;
    const newScore = score + 1;
    if (newScore >= newBestScore) {
      newBestScore = newScore;
    }
    setScore(newScore);
    setBestScore(newBestScore);
  }

  function newGame() {
    setScore(0);
    setCountries(selectCountries(africanCountries));
  }

  return (
    <>
      <Header />
      <Score score={score} bestScore={bestScore} newGameHandle={newGame} />
      <CardContainer countries={countries} handleCountryClick = {handleCardClick} />
      <Footer />
    </>
  )
}

export default App
