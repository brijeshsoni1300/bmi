import React, { useState } from "react";
import "./index.css";

const Bmi = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const calculateIndex = () => {
    setResult(() => {
      return (weight * 10000) / (height * height);
    });
    setHeight("");
    setWeight("");
  };

  return (
    <div className="container">
      <div className="sub-container">
        <article>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
              <div>
                <label htmlFor="Height">Height : </label>
              </div>
              <div>
                <input
                  style={{ marginLeft: "15px" }}
                  type="number"
                  id="Height"
                  name="Height"
                  placeholder="Enter Height in Cm"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
            </div>
            <div className="form-control">
              <div>
                <label htmlFor="firstName">Weight : </label>
              </div>
              <input
                type="number"
                id="Weight"
                name="Weight"
                placeholder="Enter Weight in Kgs"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="btn">
              <button type="submit" onClick={() => calculateIndex()}>
                Calculate
              </button>
            </div>
          </form>
          <div className="bmi">
            <div>
              <h1>BMI: </h1>
            </div>
            <div>
              <h2>{result}</h2>
            </div>
          </div>
          <div className="result">
            {result <= 18 && <h1>Under Weight</h1>}
            {result >= 18.5 && result <= 24.9 && <h1>Normal</h1>}
            {result >= 25 && result <= 29.9 && <h1>Over Weight </h1>}
            {result >= 30 && <h1>obese</h1>}
          </div>
        </article>
      </div>
    </div>
  );
};

export default Bmi;
