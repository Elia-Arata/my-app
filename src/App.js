import { useEffect, useState } from "react";
import "./App.css";
import { Item } from "./Item/Item";
import axios from "axios";

const apiCall = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

function App() {
  const [cocktails, cocktailsState] = useState([]);
  const [searcValue, searchValueState] = useState("");

  useEffect(() => {
    axios(apiCall+searcValue)
      .then((response) => {
        cocktailsState(response.data.drinks ?? []);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searcValue]);

  function handleChange(e) {
    searchValueState(e.target.value);
  }

  return (
    <>
      <div className="Container">
        <h1 className="Cocktail">Cocktail</h1>
        <input 
        className="input" 
        placeholder="Cerca..." 
        onChange={handleChange}>
        </input>
        <div className="Centro">
          <div className="ContenitoreDeiQuadrati">
            {cocktails.map((c) => (
              <div className="Quadrato" key={c.idDrink}>
                <Item name={c.strDrink} image={c.strDrinkThumb} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
