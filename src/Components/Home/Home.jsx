import { useEffect } from "react";
import "./Home.css";
import { useState } from "react";
import Actor from "../Actor.jsx/Actor";
import Cart from "../Cart/Cart";
import Swal from "sweetalert2";

const Home = () => {
  const [allActors, setAllActors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);
  const [remaining, setRemaining] = useState(20000);
  const [totalCost, setTotalCost] = useState(0);

  const handleSelectActor = (actor) => {
    const doesExist = selectedActors.find((item) => item.id === actor.id);
    let count = actor.salary;
    if (doesExist) {
      return Swal.fire("Already Booked");
    } else {
      selectedActors.forEach((item) => {
        count = count + item.salary;
      });

      if (count > 20000) {
        return alert("You do not have enough money");
      }
      setTotalCost(count);
      const totalRemaining = 20000 - count;
      setRemaining(totalRemaining);

      setSelectedActors([...selectedActors, actor]);
    }
  };

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllActors(data));
  }, []);

  return (
    <div className="container">
      <div className="home-container">
        <div className="card-container">
          {allActors.map((actor) => (
            <Actor
              key={actor.id}
              actor={actor}
              handleSelectActor={handleSelectActor}
            ></Actor>
          ))}
        </div>

        <div className="cart">
          <Cart
            selectedActors={selectedActors}
            remaining={remaining}
            totalCost={totalCost}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
