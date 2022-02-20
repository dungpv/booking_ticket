import React from "react";
import _ from "lodash";

export default function FlattenLodash() {
  const arr = [[1, [2, [3, [4]]], 5]];

  const resultFlatten = _.flatten(arr);
  const resultFlattenDeep = _.flattenDeep(arr);

  console.log("resultFlatten", resultFlatten);
  console.log("resultFlattenDeep", resultFlattenDeep);

  return <div>FlattenLodash</div>;
}
