import { useState } from "react";

const FoodRecommender = () => {
  const [selectedFlavour, setSelectedFlavour] = useState();

  const updateSelectedFood = (event) => {
    setSelectedFlavour(event.target.value);
  };

  return (
    <section className="food-recommender">
      <h2>What kind of food would you like to eat today?</h2>
      <input
        onChange={updateSelectedFood}
        checked={selectedFlavour === "sweet"}
        type="radio"
        id="sweet"
        value="sweet"
        name="flavour"
      />
      <label htmlFor="sweet">Sweet</label>
      
      <input
        onChange={updateSelectedFood}
        checked={selectedFlavour === "sour"}
        type="radio"
        id="sour"
        value="sour"
        name="flavour"
      />
      <label htmlFor="sour">Sour</label>
      
      <input
        onChange={updateSelectedFood}
        checked={selectedFlavour === "savoury"}
        type="radio"
        id="savoury"
        value="savoury"
        name="flavour"
      />
      <label htmlFor="savoury">Savoury</label>
      
      <input
        onChange={updateSelectedFood}
        checked={selectedFlavour === "expensive"}
        type="radio"
        id="expensive"
        value="expensive"
        name="flavour"
      />
      <label htmlFor="expensive">Expensive</label>

      <div>Your selected flavour is {selectedFlavour}</div>
    </section>
  );
};

export default FoodRecommender;
