import React from "react";
import Slider from "react-slick";
import "./LatestNews.css";

const LatestNews = () => {
  const newsData = [
    {
      img: "https://demo.ovathemewp.com/meup/wp-content/uploads/2024/01/blog_4-710x480.jpeg",
      category: "Travel",
      date: "June 25, 2024",
      title: "New York Home Fashion Week",
      description:
        "Aenean tincidunt dictum volutpat. Suspendisse potenti. Duis sit amet.",
    },
    {
      img: "https://demo.ovathemewp.com/meup/wp-content/uploads/2024/01/blog_5-710x480.jpeg",
      category: "Travel",
      date: "June 25, 2024",
      title: "Exhibition Excellence Awards",
      description:
        "Aenean tincidunt dictum volutpat. Suspendisse potenti. Duis sit amet.",
    },
    {
      img: "https://demo.ovathemewp.com/meup/wp-content/uploads/2024/01/blog_6-710x480.jpeg",
      category: "Travel",
      date: "June 25, 2024",
      title: "1950s Up To Now Pop",
      description:
        "Aenean tincidunt dictum volutpat. Suspendisse potenti. Duis sit amet.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="newsDiv">
        <h1>Our Latest News</h1>
        <p>News From Our Blog</p>
        <hr />
      </div>
      <Slider {...settings} className="sliders">
        {newsData.map((news, index) => (
          <div key={index} className="blogDiv">
            <div className="Blogs">
              <img src={news.img} alt={news.title} />
              <div className="contentDiv">
                <ul>
                  <li>
                    <i
                      class="fa-solid fa-gift"
                      style={{ color: "#f04e45", marginRight: "5px" }}
                    ></i>
                    {news.category}
                  </li>
                  <li>
                    <i
                      class="fa-regular fa-clock"
                      style={{ color: "#f04e45", marginRight: "5px" }}
                    ></i>
                    {news.date}
                  </li>
                </ul>
                <h2>{news.title}</h2>
                <p>{news.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div class="newsletter-container">
        <div class="newsletter-left">
          <span class="subscribe-text">SUBSCRIBE</span>
          <h2 class="signup-text">Sign up for Newsletter!</h2>
        </div>
        <div class="newsletter-right">
          <form class="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              class="email-input"
            />
            <button type="submit" class="subscribe-button">
              SUBSCRIBE &rarr;
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
