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
      {members.map((member) => (
        <div key={member.name} {...member}>
          <h3>{member.name}</h3>
          <p>Age: {member.age}</p>
        </div>
      ))}
      ;
    </div>
  );
}
