import React from "react";
import rooms from "../data/rooms";

const Article = () => {
  return (
    <article className="room">
      {rooms.map((room, index) => (
        <div className="room__item" key={index}>
          <div className="room__item__imgBox">
            <img className="imgBox" src={room.img} alt="imgBox" />
            <img
              className="imgBox__like"
              src="https://pixlok.com/wp-content/uploads/2021/12/Instagram-Like-Icon-03brf3.png"
              alt="imgBoxLike"
            />
          </div>
          <div className="room__item__textBox">
            <div className="textBox__1">
              <div className="textBox__1__loc">{room.loc}</div>
              <div className="textBox__1__star">★ {room.star}</div>
            </div>
            <div className="textBox__2">{room.plus}</div>
            <div className="textBox__2">{room.when}</div>
            <div className="textBox__3">
              ₩{room.price.toLocaleString("ko-KR")} /{room.standard}
            </div>
          </div>
        </div>
      ))}
    </article>
  );
};

export default Article;
