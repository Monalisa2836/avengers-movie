import PropTypes from "prop-types";

const Actor = ({ actor, handleSelectActor }) => {
  const { name, image, salary, role } = actor;
//   console.log(actor);
  return (
    <div>
      <div className="card">
        <div className="card-img">
          <img className="photo" src={image} alt="" />
        </div>
        <h2>{name}</h2>
        <p>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, odit.
          </small>
        </p>
        <div className="info">
          <p>Salary: ${salary}</p>
          <p>{role}</p>
        </div>
        <button onClick={()=>handleSelectActor(actor)} className="card-btn">
          Select
        </button>
      </div>
    </div>
  );
};

Actor.propTypes = {
  actor: PropTypes.object.isRequired,
  handleSelectActor: PropTypes.func,
};

export default Actor;
