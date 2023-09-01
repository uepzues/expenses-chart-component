import { useState } from "react";
import "./BarsComp.css";

function BarsComp(data) {
  const num = data.items.map((item) => item.amount);
  const maxAmount = Math.max(...num);

  const [hover, setHover] = useState(Array(data.items.length).fill("none"));

  const handleMouseOver = (index) => {
    const newHover = [...hover];
    newHover[index] = "initial";
    setHover(newHover);
  };
  const handleMouseOut = (index) => {
    const newHover = [...hover];
    newHover[index] = "none";
    setHover(newHover);
  };

  return (
    <>
      <div className="chartBar">
        {data.items.map((items, index) => (
          <div key={index}>
            <div
              onTouchStart={() => handleMouseOver(index)}
              onTouchEnd={() => handleMouseOut(index)}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={() => handleMouseOut(index)}
              className="bar"
              style={{ height: (items.amount / maxAmount) * 100 + 25 }}
            >
              <p style={{ display: hover[index] }}>{items.amount}</p>
            </div>
            <span className="days">{items.day}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default BarsComp;
