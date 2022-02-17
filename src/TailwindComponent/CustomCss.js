import React, { Component } from "react";
import "./CustomCss.css";

export default class CustomCss extends Component {
  render() {
    return (
      <div className="container mt-1">
        <article className="bg-gray-500 p-5 shadow-lg">
          <p className="text-4xl text-white">Tiêu đề</p>
          <p className="content">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
          <button class="animation-scale">Hover me</button>
        </article>
      </div>
    );
  }
}
