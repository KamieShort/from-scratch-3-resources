import React, { useState, useEffect } from 'react';
import { fetchDogs } from '../../services/fetchDogs';

export default function DogsData() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData3 = async () => {
      const data = await fetchDogs();

      setDogs(data);
    };
    fetchData3();
  }, []);

  return (
    <div>
      {dogs.map((dog) => (
        <div key={dog.name} {...dog}>
          <h2>{dog.name}</h2>
          <p2>Breed: {dog.breed}</p2>
        </div>
      ))}
    </div>
  );
}
