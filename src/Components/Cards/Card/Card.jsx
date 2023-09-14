import PropTypes from "prop-types";

const Card = ({ card ,handleVisitedCountry,handleVisitedFlag}) => {
  console.log( handleVisitedCountry);
  return (
    <div >
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-72 h-36"
            src= {card.flags.png}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Country: {card.name.common}</h2>
          <h2 className="card-title">Capital: {card.capital }</h2>
          <h2 className="card-title">Area: {card.area} km<sup>2</sup></h2>
          <h2 className="card-title">Population: {card.population}</h2>
          <div className="card-actions ">
                      <button onClick={() => handleVisitedCountry(card)} className="btn btn-success">Visited</button>
                      <button onClick={()=>handleVisitedFlag(card.flags.png)} className="btn btn-success ml-3">Add Flag</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
    card: PropTypes.array,
    handleVisitedCountry: PropTypes.func,
    handleVisitedFlag:PropTypes.func
};

export default Card;
