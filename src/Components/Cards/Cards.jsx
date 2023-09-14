import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card/Card";

const Cards = () => {
    const [cards, setCards] = useState([]);
    const [visitedCountry,setVisitedCountry] = useState([])
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>setCards(data))
    }, [])
    
    const handleVisitedCountry = (card) => {
        setVisitedCountry([...visitedCountry,card])
    }

    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-2 py-4 my-10">
            <h2>Countries:{cards.length}</h2>
            <h2>Visited Countries: {visitedCountry.length}</h2>
            <ul>
            {
                visitedCountry.map(country => <li key={country.name}>{ country.name.common}</li>)
            }
           </ul>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                cards.map((card, idx) => <Card key={idx}
                    card={card}
                     handleVisitedCountry={handleVisitedCountry}
                ></Card>) 
            }
      </div>
       </div>
  )
};

Cards.propTypes = {
  Cards: PropTypes.func,
};

export default Cards;
