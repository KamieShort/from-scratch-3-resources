import React, { useState, useEffect } from 'react';
import { fetchFamilyData } from '../../services/fetchfamily';

export default function FamilyData() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFamilyData();

      setMembers(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Family Data</h1>
      {members.map((member) => (
        <div key={member.name} {...member}>
          <h2>{member.name}</h2>
          <p>Age: {member.age}</p>
        </div>
      ))}
      ;
    </div>
  );
}
