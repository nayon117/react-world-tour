import PropTypes from "prop-types";

const Card = ({ card }) => {
  console.log(card);
  return (
    <div >
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src= {card.flags.png}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{card.name.common}</h2>
          <h2 className="card-title">Capital: {card.capital }</h2>
          <h2 className="card-title">Area: {card.area} km<sup>2</sup></h2>
          <h2 className="card-title">Population: {card.population}</h2>
          <div className="card-actions ">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.array,
};

export default Card;
