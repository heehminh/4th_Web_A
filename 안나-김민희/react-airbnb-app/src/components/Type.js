import React from "react";
import types from "../data/types";

const Type = () => {
  return (
    <div className="type">
      <div className="type__wrapper">
        {types.map((type, index) => (
          <div className="type__item" key={index}>
            <img
              className="type__item__icon"
              src={type.type_imgSrc}
              alt="type"
            />
            <div className="type__item__description">
              {type.type_description}
            </div>
          </div>
        ))}
      </div>

      <div className="type__filter">
        <img
          className="type__filter__icon"
          src="./assets/room-filter.png"
          alt="room filter"
        />
        <div className="type__filter__description">필터</div>
      </div>
    </div>
  );
};

export default Type;
