import React from "react";
import _ from "lodash";
export default function IncludeLodash() {
  const arr = ["1", "2", "3"];

  console.log(_.includes(arr, 1));

  const object = { id: 1, name: "Nguyễn văn a", age: 18 };
  console.log("Result", _.includes(object, 18));

  return <div>IncludeLodash</div>;
}
