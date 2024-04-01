"use client";
import { useEffect, useState } from "react";
import "./suscribete.scss";

function Suscribete() {
  const [valueInput, setValueInput] = useState("");

  useEffect(() => {}, [valueInput]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value);
  };

  return (
    <div className="sub-wrapper">
      <div className="suscribete">
        <p className="main-title">Suscribete al Blog Literario</p>
        <div className="blue-divider" />
        <p className="sub-desc">
          Blogs sobre poesia, literaratura latinoamericana, historia pacifica,
          escritores colombianos, y mucho más.
        </p>

        <div className="input-wrapper">
          <input
            value={valueInput}
            onChange={handleChange}
            type="text"
            placeholder="Tu Correo Electronico"
          />
          <button className="btn">Suscribete</button>
        </div>
      </div>
    </div>
  );
}

export default Suscribete;
