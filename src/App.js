import React, { useState } from "react";

const fontFamilies = ["Arial", "Times New Roman", "Georgia"];

export default function Figma() {
  const [fontFamily, setFontFamily] = useState("");
  const [fontSize, setfontSize] = useState(16);

  return (
    <div style={{ textAlign: "center" }}>
      <div className="figma">
        <p
          style={{
            fontFamily: fontFamily,
            fontSize: `${fontSize}px`
          }}
        >
          Your limitation—it's only your imagination
        </p>
        <div>
          <select
            value={fontFamily}
            onChange={(event) => setFontFamily(event.target.value)}
          >
            {fontFamilies.map((font) => (
              <option key={font}>{font}</option>
            ))}
          </select>
          <div style={{ display: "inline" }}>
            <button
              onClick={() => {
                setfontSize((prState) => prState + 8);
              }}
            >
              +
            </button>
            <span
              style={{ fontSize: "15px", margin: "0.5rem" }}
            >{`${fontSize}px`}</span>
            <button
              onClick={() => {
                setfontSize((prState) => prState - 8);
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
