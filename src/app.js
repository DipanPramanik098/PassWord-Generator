import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator() {
  const [password, setPassword] = useState("Dipan");
  const [length, setLength] = useState(5);
  const [numberChange, setNumberChange] = useState(false);
  const [charChange, setCharChange] = useState(false);

  // ✅ useCallback memoizes the function until dependencies change
  const generatePassword = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberChange) {
      str += "0123456789";
    }
    if (charChange) {
      str += "!@#$%^&*()_+[]{}|;:',.<>?/`~";
    }

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  }, [length, numberChange, charChange]); // 👈 function updates only when these change

  return (
    <div className="PasswordGenerator">
      <h1>Password Generator</h1>

      <div className="password-display">{password}</div>

      <div className="controls">
        <div className="length-control">
          <input
            type="range"
            min={5}
            max={50}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="length-slider"
          />
          <label className="length-label">Length: {length}</label>
        </div>

        <div className="checkbox-group">
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="number"
              checked={numberChange}
              onChange={() => setNumberChange(!numberChange)}
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="char"
              checked={charChange}
              onChange={() => setCharChange(!charChange)}
            />
            <label htmlFor="char">Special Characters</label>
          </div>
        </div>

        <button className="generate-btn" onClick={generatePassword}>
          Generate Password
        </button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <PasswordGenerator />
);
