import React, { useState, useEffect, useRef } from "react";
import rooms from "../../../data/rooms";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../../redux/likeSlice";
import { loginAtom } from "../../../recoil/atom";
import { useRecoilValue } from "recoil";
import LoginModal from "../atoms/LoginModal";
import styled from "styled-components";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";

SwiperCore.use([Navigation, Pagination]);

const Article = ({ typeIndex }) => {
  const dispatch = useDispatch();
  const likedRooms = useSelector((state) => state.likes);
  const [displayedRooms, setDisplayedRooms] = useState([]);
  const isLogin = useRecoilValue(loginAtom);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleLike = (index) => {
    if (!isLogin) {
      setIsModalOpen(true);
    } else {
      dispatch(toggleLike(index));
    }
  };

  useEffect(() => {
    setDisplayedRooms(
      typeIndex === 0
        ? rooms
        : rooms.filter((room) => room.typeIndex === typeIndex)
    );
  }, [typeIndex]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const modalRef = useRef();
  useOnClickOutside(modalRef, () => {
    setIsModalOpen(false);
  });

  return (
    <article className="room">
      {displayedRooms.map((room, index) => {
        const { img, loc, star, plus, when, price, standard } = room;
        const liked = isLogin ? likedRooms[index] : false;

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
      {!isLogin && isModalOpen && (
        <ModalOverlay>
          <ModalWrapper ref={modalRef}>
            <ModalHeader>
              <ModalCloseButton onClick={handleCloseModal}>X</ModalCloseButton>
              <ModalHeaderTitle>로그인 또는 회원가입</ModalHeaderTitle>
            </ModalHeader>
            <ModalBody>
              <LoginModal />
            </ModalBody>
          </ModalWrapper>
        </ModalOverlay>
      )}
    </article>
  );
};

export default Article;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  width: 600px;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid lightgray;
`;

const ModalCloseButton = styled.button`
  position: fixed;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;

const ModalHeaderTitle = styled.div`
  color: black;
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;

const ModalBody = styled.div`
  padding: 1rem;
`;
