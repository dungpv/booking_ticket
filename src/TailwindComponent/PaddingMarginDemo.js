import React from "react";

export default function PaddingMarginDemo(props) {
  return (
    <div className="container">
      <br />
      <button
        className="bg-red-200 px-5"
        style={{ width: "auto", marginTop: 15 }}
      >
        button padding
      </button>

      <br />
      <button className="bg-purple-400 mt-5 mr-5">cyberlearn</button>
    </div>
  );
}
