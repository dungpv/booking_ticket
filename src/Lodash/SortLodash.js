import React from "react";
import _ from "lodash";

export default function SortLodash() {
  const users = [
    { id: 1, name: "Fred", age: 48 },
    { id: 2, name: "Kaito", age: 36 },
    { id: 3, name: "Bake", age: 40 },
    { id: 4, name: "Jule", age: 34 },
    { id: 5, name: "Jule", age: 35 },
  ];

  const resultSortByAge = _.sortBy(users, [(item) => item.age]);
  console.log("resultSortByAge", resultSortByAge);

  const result = _.sortBy(users, ["name", "age"]);
  console.log("result", result);

  return <div>SortLodash</div>;
}
