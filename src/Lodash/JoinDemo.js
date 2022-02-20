import React from "react";
import _ from "lodash";

export default function JoinDemo() {
  let arr = ["Khải", "Nam", "Minh"];
  let arrPerson = [
    { id: 1, name: "Khải" },
    { id: 2, name: "Nam" },
    { id: 3, name: "Minh" },
  ];
  //es6
  const resultEs6 = arr.join("-");

  //lodash
  const resultLodash = _.join(arr, "*");

  const person = _.find(arrPerson, (item) => item.id === 2);

  return (
    <>
      <div>{resultEs6}</div>
      <div>{resultLodash}</div>
      <div>
        <p>Name: {person.name}</p>
      </div>
    </>
  );
}
