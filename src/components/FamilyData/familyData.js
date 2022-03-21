import React from 'react';

export default function FamilyData({ members, ...member }) {
  return (
    <div>
      <h3>{member.name}</h3>
      <p>Age: {member.age}</p>
    </div>
  );
}
