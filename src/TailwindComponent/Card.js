import React from "react";

export default function Card() {
  return (
    <div className="card w-full">
      <div className="card-body bg-gray-200 py-8 rounded-tl-lg rounded-tr-lg px-7">
        <h3 className="text-purple-800 font-bold text-xs">Category</h3>
        <p className="text-black text-xl ">Cybersoft frontend developer</p>
        <p className="text-black text-xl font-thin my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At unde eum
          repellendus laborum vel. Aspernatur eum ex earum vitae. Nostrum
          facere, modi incidunt voluptates est veniam delectus cupiditate
          perferendis praesentium.
        </p>
      </div>
      <div className="card-footer rounded-bl-lg rounded-br-lg flex justify-between bg-gray-100 px-2">
        <p className="mt-4">1 USD</p>
        <button className="rounded-lg bg-purple-500 text-white px-2 my-2 py-2 hover:text-purple-500 hover:bg-gray-300 transition duration-500">
          Register
        </button>
      </div>
    </div>
  );
}
