import React from "react";
import _ from "lodash";

export default function LastFirstLodash() {
  let arrStudent = [
    { id: 1, name: "Peter" },
    { id: 2, name: "Barry" },
    { id: 3, name: "Iris" },
  ];

  const firstItem = _.first(arrStudent);
  const lastItem = _.last(arrStudent);

  const arr = [
    ["001", "Alice"],
    ["002", "Pop"],
    ["003", "Beck"],
  ];

  const [idFirst, nameFirst] = _.first(arr);
  const [idLast, nameLast] = _.last(arr);

  return (
    <div>
      <div>FirstItem: {firstItem.name}</div>
      <div>LastItem: {lastItem.name}</div>
      <hr></hr>
      <div>
        FirstItem: {idFirst} - {nameFirst}
      </div>
      <div>
        LastItem: {idLast} - {nameLast}
      </div>
    </div>
  );
}
