import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Spinner from "../../utils/Spinner.gif"

const Body = () => {
  //Local state Variable

  const [ListOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5203896&lng=73.8567005&is-seo-homepage-enabled=true&page_type"
    );

    const json = await data.json();

console.log(json);

// Optional chaining ? 	

    setListOfRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  if(ListOfRestaurant.length === 0){
    return <h1>Loading..</h1>
  }


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here

            const filteredList = ListOfRestaurant.filter(
              (res) => res?.data?.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurant.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
