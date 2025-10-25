// Colors.js
import React from "react";
import "./Colors.css";
import Input from "../../components/Input";

function Colors({ handleChange }) {
  const colors = [
    { id: "all", value: "", title: "All", color: "" },
    { id: "gold", value: "gold", title: "Gold Collection", color: "gold" },
    { id: "black", value: "black", title: "Black Collection", color: "black" },
    { id: "yellow", value: "yellow", title: "Yellow Vibrance", color: "yellow" },
    { id: "transparent", value: "transparent", title: "Transparent Elegance", color: "white" },
    { id: "orange", value: "orange", title: "Orange Burst", color: "orange" },
    { id: "blue", value: "blue", title: "Blue Horizon", color: "blue" },
    { id: "red", value: "red", title: "Red Classic", color: "red" },
    { id: "purple", value: "purple", title: "Purple Dream", color: "purple" },
    { id: "green", value: "green", title: "Green Punk", color: "green" },
    { id: "brown", value: "brown", title: "Brown Classic", color: "brown" },
  ];

  return (
    <div>
      <h1 className="color-title">Colors</h1>
      {colors.map((color) => (
        <div key={color.id}>
          {color.id === "all" ? (
            <label className="sidebar-label-container">
              <input onChange={handleChange} type="radio" value={color.value} name="test" />
              <span className="checkmark"></span>All
            </label>
          ) : (
            <Input
              value={color.value}
              title={color.title}
              name="test"
              color={color.color}
              handleChange={handleChange}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Colors;
