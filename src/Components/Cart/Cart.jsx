import "./Cart.css";
import PropTypes from "prop-types";

const Cart = ({ selectedActors, remaining, totalCost }) => {
  console.log(selectedActors);
  return (
    <div className="container">
      <h2>Total Actors : {selectedActors.length} </h2>
      <h3>Remaining: {remaining}</h3>
      <h3>Total Cost: {totalCost}</h3>
      {selectedActors.map((selectedActor, index) => (
        <li key={index}>{selectedActor.name}</li>
      ))}
    </div>
  );
};

Cart.propTypes = {
  selectedActors: PropTypes.array.isRequired,
  remaining: PropTypes.number,
  totalCost: PropTypes.number,
};

export default Cart;
