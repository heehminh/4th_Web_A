import React, { useState } from "react";
import rooms from "../data/rooms";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

SwiperCore.use([Navigation, Pagination]);
const initialLikeData = localStorage.getItem("newLikedRooms")
  ? JSON.parse(localStorage.getItem("newLikedRooms"))
  : [];

const Article = () => {
  const [likedRooms, setLikedRooms] = useState(initialLikeData);

  const toggleLike = (index) => {
    const newLikedRooms = [...likedRooms];
    newLikedRooms[index] = !newLikedRooms[index];
    setLikedRooms(newLikedRooms);
    localStorage.setItem("newLikedRooms", JSON.stringify(newLikedRooms));
  };

  return (
    <article className="room">
      {rooms.map((room, index) => {
        const { img, loc, star, plus, when, price, standard } = room;
        const liked = likedRooms[index];

        return (
          <div className="room__item" key={index}>
            <Swiper
              className="room__item__imgBox"
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop
            >
              {img.map((src, index) => (
                <SwiperSlide key={index}>
                  <img className="imgBox" src={src} alt="imgBox" />
                </SwiperSlide>
              ))}
            </Swiper>

            {liked ? (
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

            <div className="room__item__textBox">
              <div className="textBox__1">
                <div className="textBox__1__loc">{loc}</div>
                <div className="textBox__1__star">★ {star}</div>
              </div>
              <div className="textBox__2">{plus}</div>
              <div className="textBox__2">{when}</div>
              <div className="textBox__3">
                ₩{price.toLocaleString("ko-KR")} /{standard}
              </div>
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default Article;
