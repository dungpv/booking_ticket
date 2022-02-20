import React from "react";
import _ from "lodash";

export default function UniqLodash() {
  const arr = [1, 2, 2, 2, 4, 5, 6];
  console.log(_.uniq(arr));

  const arr2 = [
    { id: 1, name: "iphoneX", price: 1000 },
    { id: 2, name: "iphoneXS", price: 2000 },
    { id: 3, name: "iphoneXSMax", price: 3000 },
    { id: 3, name: "iphoneXSMax", price: 3000 },
    { id: 4, name: "iphonePro", price: 4000 },
    { id: 5, name: "iphoneProMax", price: 5000 },
    { id: 5, name: "iphoneProMax", price: 5000 },
    { id: 4, name: "iphonePro", price: 4000 },
  ];

  console.log("result", _.uniqBy(arr2, "id"));

  return <div>UniqLodash</div>;
}
