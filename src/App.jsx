import { useEffect, useState } from "react";
import Search from "./components/Search";

function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <div className="App">
      <Search key={food} foodData={foodData} setFoodData={setFoodData} />
      {foodData.map((food) => (
        <h1>{food.title}</h1>
      ))}
    </div>
  );
}

export default App;
