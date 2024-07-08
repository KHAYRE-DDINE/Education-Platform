import React from "react";
import "./Definition.css";

function Definition({ title, paragraph, width, size }) {
  return (
    <div className="about z-10 relative">
      <div className="title">
        <h1 className="text-colorGray-800">{title}</h1>
      </div>
      <div className="para">
        <p
          className="text-colorGray-500"
          style={{ width: width, fontSize: size }}
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
}

export default Definition;
