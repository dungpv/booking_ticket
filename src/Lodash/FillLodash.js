import _ from "lodash";
import React from "react";

export default function FillLodash() {
  var arr = [
    { id: 1, name: "iphone X" },
    { id: 2, name: "iphone XS" },
    { id: 3, name: "iphone XS Max" },
    { id: 4, name: "iphone Pro" },
    { id: 5, name: "iphone Pro Max" },
  ];

  _.fill(arr, { id: 5, name: "Samsung galaxy note 10 plus" }, 1, 4);

  console.log(arr);

  return <div>FillLodash</div>;
}
