// Colors.js
import React from "react";
import "./Colors.css";
import Input from "../../components/Input";

function Colors({ handleChange }) {
  return (
    <div>
      <h1 className="color-title">Colors</h1>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="color" />
        <span className="checkmark"></span>All
      </label>
      <Input
        value="gold"
        title="Gold Collection"
        name="color"
        color="gold"
        handleChange={handleChange}
      />
      <Input
        value="black"
        title="Black Collection"
        name="color"
        color="black"
        handleChange={handleChange}
      />
      <Input
        value="yellow"
        title="Yellow Vibrance"
        name="color"
        color="yellow"
        handleChange={handleChange}
      />
      <Input
        value="transparent"
        title="Transparent Elegance"
        name="color"
        color="white"
        handleChange={handleChange}
      />
      <Input
        value="orange"
        title="Orange Burst"
        name="color"
        color="orange"
        handleChange={handleChange}
      />
      <Input
        value="blue"
        title="Blue Horizon"
        name="color"
        color="blue"
        handleChange={handleChange}
      />
      <Input
        value="red"
        title="Red Classic"
        name="color"
        color="red"
        handleChange={handleChange}
      />
      <Input
        value="purple"
        title="Purple Dream"
        name="color"
        color="purple"
        handleChange={handleChange}
      />
      <Input
        value="green"
        title="Green Punk"
        name="color"
        color="green"
        handleChange={handleChange}
      />
      <Input
        value="brown"
        title="Brown Classic"
        name="color"
        color="brown"
        handleChange={handleChange}
      />
    </div>
  );
}

export default Colors;
