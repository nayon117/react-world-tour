import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card/Card";

const Cards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                cards.map((card, idx) => <Card key={idx}
                    card={card}
                ></Card>) 
            }
      </div>
  )
};

Cards.propTypes = {
  Cards: PropTypes.func,
};

export default Cards;
