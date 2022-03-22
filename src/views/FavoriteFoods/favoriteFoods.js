import React, { useState, useEffect } from 'react';
import { fetchFoods } from '../../services/fetchFoods';

export default function FavoriteFoods() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchData2 = async () => {
      const data = await fetchFoods();

      setFoods(data);
    };
    fetchData2();
  }, []);

  return (
    <div>
      <h1>Favorite Foods</h1>
      {foods.map((food) => (
        <div key={food.id} {...food}>
          <h2>{food.name}</h2>
          <p2>Cuisine: {food.cuisine}</p2>
        </div>
      ))}
    </div>
  );
}
