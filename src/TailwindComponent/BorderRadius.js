import React from "react";

export default function BorderRadius(props) {
  return (
    <>
      <div className="container mt-5">
        <button className="rounded-lg bg-green-400 p-5 w-40 text-white">
          Hello CyberLearn
        </button>
        <button className="rounded-lg bg-green-400 p-5 w-40 text-white shadow ...">
          Hello CyberLearn
        </button>
      </div>
      <div class="rounded-full bg-purple-400 w-24 py-3 px-6...">Pill Shape</div>
      <div class="rounded-full bg-purple-400 h-24 w-24 flex items-center justify-center...">
        Circle
      </div>
    </>
  );
}
