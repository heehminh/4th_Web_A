const renderPost = (
  profileImage,
  userName,
  postDate,
  likeCount,
  contentImage,
  contentArticle
) => {
  const newPostElement = document.createElement("li");
  newPostElement.innerHTML = `
              <div>
                <header class="post-header">
                  <div class="post-header-left">
                    <img
                      src="./asset/${profileImage}"
                      alt="송하영"
                      class="standard-profile-image"
                    />
                    <h1>${userName}</h1>
                    <p>•${postDate}일</p>
                  </div>
                  <div>
                    <svg
                      aria-label="옵션 더 보기"
                      class="_ab6-"
                      color="rgb(245, 245, 245)"
                      fill="rgb(245, 245, 245)"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <circle cx="12" cy="12" r="1.5"></circle>
                      <circle cx="6" cy="12" r="1.5"></circle>
                      <circle cx="18" cy="12" r="1.5"></circle>
                    </svg>
                    <!-- <svg
                      aria-label="옵션 더 보기"
                      class="_ab6-"
                      color="rgb(142, 142, 142)"
                      fill="rgb(142, 142, 142)"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <circle cx="12" cy="12" r="1.5"></circle>
                      <circle cx="6" cy="12" r="1.5"></circle>
                      <circle cx="18" cy="12" r="1.5"></circle>
                    </svg> -->
                  </div>
                </header>
                <section class="image-slider">
                  <img src="./asset/${contentImage}" alt="송하영" />
                </section>
                <section class="interaction-bar">
                  <div class="interaction-bar-left">
                    <svg
                      aria-label="좋아요"
                      class="x1lliihq x1n2onr6"
                      color="rgb(245, 245, 245)"
                      fill="rgb(245, 245, 245)"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <title>좋아요</title>
                      <path
                        d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"
                      ></path>
                    </svg>
                    <svg
                      aria-label="댓글 달기"
                      class="x1lliihq x1n2onr6"
                      color="rgb(245, 245, 245)"
                      fill="rgb(245, 245, 245)"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <title>댓글 달기</title>
                      <path
                        d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                        fill="none"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                    </svg>
                    <svg
                      aria-label="게시물 공유"
                      class="x1lliihq x1n2onr6"
                      color="rgb(245, 245, 245)"
                      fill="rgb(245, 245, 245)"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <title>게시물 공유</title>
                      <line
                        fill="none"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                        x1="22"
                        x2="9.218"
                        y1="3"
                        y2="10.083"
                      ></line>
                      <polygon
                        fill="none"
                        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></polygon>
                    </svg>
                  </div>
                  <div id="interaction-bar-right">
                    <svg
                      aria-label="저장"
                      class="x1lliihq x1n2onr6"
                      color="rgb(245, 245, 245)"
                      fill="rgb(245, 245, 245)"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <title>저장</title>
                      <polygon
                        fill="none"
                        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></polygon>
                    </svg>
                  </div>
                </section>
                <section class="article">
                  <p>좋아용 ${likeCount}개</p>
                  <div>
                    <p>
                      <a href="#">${userName}</a>
                      ${contentArticle}
                    </p>
                  </div>
                </section>
                <section class="comment-bar">
                  <input type="text" placeholder="댓글 달기..." />
                  <div>
                    <svg
                      aria-label="이모티콘"
                      class="x1lliihq x1n2onr6"
                      color="rgb(142, 142, 142)"
                      fill="rgb(142, 142, 142)"
                      height="13"
                      role="img"
                      viewBox="0 0 24 24"
                      width="13"
                    >
                      <title>이모티콘</title>
                      <path
                        d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"
                      ></path>
                    </svg>
                  </div>
                </section>
              </div>
  `;
  const listRoot = document.getElementById("post-list");
  listRoot.append(newPostElement);
  console.log(listRoot);
};

const renderStory = (profileImage, userName) => {
  const newPostElement = document.createElement("li");
  newPostElement.innerHTML = `
              <div class="slide">
                <img src="./asset/${profileImage}" alt="image1" />
                <p>${userName}</p>
              </div>
  `;
  const listRoot = document.getElementById("story-list");
  listRoot.append(newPostElement);
};

renderPost("profileImg3.jpeg", "shy9_29", 2, 27, "shy1.jpeg", "🍀🍀");
renderPost(
  "profileImg1.jpeg",
  "young-eun",
  10,
  2,
  "young.jpeg",
  "나는 내가 아닌 다른 사람이 되고자 한다"
);
renderPost(
  "basiceProfileImg.jpeg",
  "DEPth",
  34,
  922,
  "depth.JPG",
  "뎁스, 더 깊이있는 여정의 시작"
);

storyData = [
  {
    userId: 1,
    profileImg: "profileImg1.jpeg",
    userName: "shy9_29",
  },
  {
    userId: 2,
    profileImg: "profileImg3.jpeg",
    userName: "shycqqe9_29",
  },
  {
    userId: 3,
    profileImg: "profileImg2.jpeg",
    userName: "sh9",
  },
  {
    userId: 4,
    profileImg: "profileImg3.jpeg",
    userName: "shwq_29",
  },
  {
    userId: 5,
    profileImg: "profileImg1.jpeg",
    userName: "shy9_cecq29",
  },
  {
    userId: 6,
    profileImg: "profileImg3.jpeg",
    userName: "sh_29",
  },
  {
    userId: 7,
    profileImg: "profileImg2.jpeg",
    userName: "s9",
  },
  {
    userId: 8,
    profileImg: "profileImg3.jpeg",
    userName: "shecqqqw29",
  },
];

for (const story of storyData) {
  renderStory(story.profileImg, story.userName);
}
