import React, { useState } from "react";
import rooms from "../data/rooms";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const Article = () => {
  const [likedRooms, setLikedRooms] = useState([]);

  const toggleLike = (index) => {
    const newLikedRooms = [...likedRooms];
    newLikedRooms[index] = !newLikedRooms[index];
    setLikedRooms(newLikedRooms);
  };

  return (
    <article className="room">
      {rooms.map((room, index) => (
        <div className="room__item" key={index}>
          <div className="room__item__imgBox">
            <img className="imgBox" src={room.img} alt="imgBox" />
            {likedRooms[index] ? (
              <HeartFilled
                className="room__like"
                onClick={() => toggleLike(index)}
              />
            ) : (
              <HeartOutlined
                className="room__unlike"
                onClick={() => toggleLike(index)}
              />
            )}
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
