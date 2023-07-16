import React from "react";

const Pagination = ({ current, total, onChange }) => {
  let btnArr = new Array(total).fill(0);
  return (
    <div>
      {btnArr.map((el, index) => (
        <button
          key={index + 1}
          style={{
            margin: "0.5rem",
            padding: "0.5rem",
            borderColor : current===index+1 && "blue",
            borderRadius : "5px"
          }}
          onClick={() => onChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
