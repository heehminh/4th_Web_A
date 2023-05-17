import React, { useState, useEffect } from "react";
import rooms from "../data/rooms";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../redux/likeSlice";

SwiperCore.use([Navigation, Pagination]);

const Article = ({ typeIndex }) => {
  const dispatch = useDispatch();
  const likedRooms = useSelector((state) => state.likes);
  const [displayedRooms, setDisplayedRooms] = useState([]);

  const handleToggleLike = (index) => {
    dispatch(toggleLike(index));
  };

  useEffect(() => {
    setDisplayedRooms(
      typeIndex === 0
        ? rooms
        : rooms.filter((room) => room.typeIndex === typeIndex)
    );
  }, [typeIndex]);

  return (
    <article className="room">
      {displayedRooms.map((room, index) => {
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
                onClick={() => handleToggleLike(index)}
              />
            ) : (
              <HeartOutlined
                className="room__unlike"
                onClick={() => handleToggleLike(index)}
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
