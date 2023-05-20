import React, { useRef, useCallback, useEffect } from "react";

const Map = () => {
  const mapElement = useRef(null);

  // 컴포넌트가 마운트될때 수동으로 스크립트를 넣어줌
  // script보다 window.initMap이 먼저 선언되도록
  const loadScript = useCallback((url) => {
    const firstScript = window.document.getElementsByTagName("script")[0];
    const newScript = window.document.createElement("script");
    newScript.src = url;
    newScript.async = true;
    newScript.defer = true;
    firstScript?.parentNode?.insertBefore(newScript, firstScript);
  }, []);

  const initMap = useCallback(() => {
    const { google } = window;
    if (!mapElement.current || !google) return;

    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.5639, lng: 126.8916 },
      zoom: 3,
    });

    const markers = [
      {
        label: 290773,
        lat: 57.5115,
        lng: 97.0569,
        loc: "후쿠오카, 일본",
        star: 4.73,
        when: "4월 6일-11일",
        plus: "안뜰 전망",
        standard: "박",
        img: "https://a0.muscache.com/im/pictures/miso/Hosting-20197171/original/e91e7c20-3cce-468a-922c-3166726fa228.jpeg?im_w=720",
      },
      {
        label: 313888,
        lat: 27.5115,
        lng: 127.056,
        loc: "후쿠오카, 일본",
        star: 4.73,
        when: "4월 6일-11일",
        plus: "안뜰 전망",
        standard: "박",
        img: "https://a0.muscache.com/im/pictures/miso/Hosting-20197171/original/e91e7c20-3cce-468a-922c-3166726fa228.jpeg?im_w=720",
      },
      {
        label: 15547,
        lat: 17.5115,
        lng: 127.0569,
        loc: "후쿠오카, 일본",
        star: 4.73,
        when: "4월 6일-11일",
        plus: "안뜰 전망",
        standard: "박",
        img: "https://a0.muscache.com/im/pictures/miso/Hosting-20197171/original/e91e7c20-3cce-468a-922c-3166726fa228.jpeg?im_w=720",
      },
      {
        label: 23547,
        lat: 23.5115,
        lng: 134.0569,
        loc: "후쿠오카, 일본",
        star: 4.73,
        when: "4월 6일-11일",
        plus: "안뜰 전망",
        standard: "박",
        img: "https://a0.muscache.com/im/pictures/miso/Hosting-20197171/original/e91e7c20-3cce-468a-922c-3166726fa228.jpeg?im_w=720",
      },

      {
        label: 838426,
        lat: 13.5115,
        lng: 124.0569,
        loc: "후쿠오카, 일본",
        star: 4.73,
        when: "4월 6일-11일",
        plus: "안뜰 전망",
        standard: "박",
        img: "https://a0.muscache.com/im/pictures/miso/Hosting-20197171/original/e91e7c20-3cce-468a-922c-3166726fa228.jpeg?im_w=720",
      },
      {
        label: 1111547,
        lat: 31.5115,
        lng: 31.0569,
        loc: "후쿠오카, 일본",
        star: 4.73,
        when: "4월 6일-11일",
        plus: "안뜰 전망",
        standard: "박",
        img: "https://a0.muscache.com/im/pictures/miso/Hosting-20197171/original/e91e7c20-3cce-468a-922c-3166726fa228.jpeg?im_w=720",
      },
      {
        label: 18552347,
        lat: 21.5115,
        lng: 124.0569,
        loc: "후쿠오카, 일본",
        star: 4.73,
        when: "4월 6일-11일",
        plus: "안뜰 전망",
        standard: "박",
        img: "https://a0.muscache.com/im/pictures/miso/Hosting-20197171/original/e91e7c20-3cce-468a-922c-3166726fa228.jpeg?im_w=720",
      },
      {
        label: 88715547,
        lat: 24.5115,
        lng: 137.0569,
        loc: "후쿠오카, 일본",
        star: 4.73,
        when: "4월 6일-11일",
        plus: "안뜰 전망",
        standard: "박",
        img: "https://a0.muscache.com/im/pictures/miso/Hosting-20197171/original/e91e7c20-3cce-468a-922c-3166726fa228.jpeg?im_w=720",
      },
      {
        label: 345547,
        lat: 30.5115,
        lng: 50.0569,
        loc: "후쿠오카, 일본",
        star: 4.73,
        when: "4월 6일-11일",
        plus: "안뜰 전망",
        standard: "박",
        img: "https://a0.muscache.com/im/pictures/miso/Hosting-20197171/original/e91e7c20-3cce-468a-922c-3166726fa228.jpeg?im_w=720",
      },
      {
        label: 7615547,
        lat: 3.5115,
        lng: 134.0569,
        loc: "후쿠오카, 일본",
        star: 4.73,
        when: "4월 6일-11일",
        plus: "안뜰 전망",
        standard: "박",
        img: "https://a0.muscache.com/im/pictures/miso/Hosting-20197171/original/e91e7c20-3cce-468a-922c-3166726fa228.jpeg?im_w=720",
      },
      {
        label: 7158547,
        lat: 40.5115,
        lng: 80.0569,
        loc: "후쿠오카, 일본",
        star: 4.73,
        when: "4월 6일-11일",
        plus: "안뜰 전망",
        standard: "박",
        img: "https://a0.muscache.com/im/pictures/miso/Hosting-20197171/original/e91e7c20-3cce-468a-922c-3166726fa228.jpeg?im_w=720",
      },
      {
        label: 4415547,
        lat: 90.5115,
        lng: 20.0569,
        loc: "후쿠오카, 일본",
        star: 4.73,
        when: "4월 6일-11일",
        plus: "안뜰 전망",
        standard: "박",
        img: "https://a0.muscache.com/im/pictures/miso/Hosting-20197171/original/e91e7c20-3cce-468a-922c-3166726fa228.jpeg?im_w=720",
      },
      {
        label: 3415547,
        lat: 13.5115,
        lng: 31.0569,
        loc: "후쿠오카, 일본",
        star: 4.73,
        when: "4월 6일-11일",
        plus: "안뜰 전망",
        standard: "박",
        img: "https://a0.muscache.com/im/pictures/miso/Hosting-20197171/original/e91e7c20-3cce-468a-922c-3166726fa228.jpeg?im_w=720",
      },
      {
        label: 23547,
        lat: 21.5115,
        lng: -157.0569,
        loc: "후쿠오카, 일본",
        star: 4.73,
        when: "4월 6일-11일",
        plus: "안뜰 전망",
        standard: "박",
        img: "https://a0.muscache.com/im/pictures/miso/Hosting-20197171/original/e91e7c20-3cce-468a-922c-3166726fa228.jpeg?im_w=720",
      },
      {
        label: 334421,
        lat: 43.5115,
        lng: -174.0569,
        loc: "후쿠오카, 일본",
        star: 4.73,
        when: "4월 6일-11일",
        plus: "안뜰 전망",
        standard: "박",
        img: "https://a0.muscache.com/im/pictures/miso/Hosting-20197171/original/e91e7c20-3cce-468a-922c-3166726fa228.jpeg?im_w=720",
      },
    ];

    const infoWindow = new google.maps.InfoWindow();

    markers.forEach(
      ({ label, lat, lng, img, loc, star, when, plus, standard }) => {
        const marker = new google.maps.Marker({
          position: { lat, lng },
          map: map,
          label: {
            // id: `marker-${index}`, // id 설정
            text: `₩${label.toLocaleString("ko-KR")}`,
            className: "icon-label",
          },
          icon: {
            url: "",
            size: new google.maps.Size(50, 20),
          },
          clickable: true, // 마커 및 라벨 클릭 가능하도록 설정
        });

        marker.addListener("click", () => {
          console.log(marker);

          const content = `
          <div class="map__item">
            <div>
              <img class="imgBox" src=${img} />
              
            </div>
            <div class="room__item__textBox">
              <div class="textBox__1">
                <div class="textBox__1__loc">${loc}</div>
                <div class="textBox__1__star">★ ${star}</div>
              </div>
              <div class="textBox__2">${plus}</div>
              <div class="textBox__2">${when}</div>
              <div class="textBox__3">
                ₩${label.toLocaleString("ko-KR")} /${standard}
              </div>
            </div>
          </div>
        `;

          infoWindow.setContent(content);
          infoWindow.open({
            anchor: marker,
            map,
          });
        });
      }
    );
    map.addListener("click", () => {
      infoWindow.close();
    });
  }, []);

  useEffect(() => {
    const script = window.document.getElementsByTagName("script")[0];
    const includeCheck = script.src.startsWith(
      "https://maps.googleapis.com/maps/api"
    );

    // script 중복 호출 방지
    if (includeCheck) return initMap();

    window.initMap = initMap;
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_KEY}&callback=initMap`
    );
  }, [initMap, loadScript]);

  return <div ref={mapElement} id="map"></div>;
};

export default Map;
