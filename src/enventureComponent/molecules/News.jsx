import React from "react";
import './News.css';

const News = () => {
  return (
    <div className="news-section">
      <div className="news-header">
        <h1>
          Eventre <span className="news-highlight">News</span>
        </h1>
        <p className="news-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
          tempor incididunt ut labore dolore
        </p>
      </div>

      <div className="news-cards">
        <div className="news-card">
          <img
            className="news-image"
            src="https://demo.themefisher.com/eventre-bootstrap/images/news/post-thumb-one.jpg"
            alt="News 1"
          />
          <div className="news-date">
            <h4>20</h4>
            <p>May</p>
          </div>
          <div className="news-info">
            <h3>Elementum purus id ultricies.</h3>
            <hr/>
            <div className="news-meta">
              <span><i class="fa-regular fa-user"></i>Admin</span>
              <span><i class="fa-regular fa-heart"></i> 30</span>
              <span><i class="fa-regular fa-message"></i> 350</span>
            </div>
          </div>
        </div>

        <div className="news-card">
          <img
            className="news-image"
            src="https://demo.themefisher.com/eventre-bootstrap/images/news/post-thumb-two.jpg"
            alt="News 2"
          />
          <div className="news-date">
            <h4>20</h4>
            <p>May</p>
          </div>
          <div className="news-info">
            <h3>Elementum purus id ultricies.</h3>
            <hr/>
            <div className="news-meta">
              <span><i class="fa-regular fa-user"></i>Admin</span>
              <span><i class="fa-regular fa-heart"></i> 30</span>
              <span><i class="fa-regular fa-message"></i> 350</span>
            </div>
          </div>
        </div>

        <div className="news-card">
          <img
            className="news-image"
            src="https://demo.themefisher.com/eventre-bootstrap/images/news/post-thumb-three.jpg"
            alt="News 3"
          />
          <div className="news-date">
            <h4>20</h4>
            <p>May</p>
          </div>
          <div className="news-info">
            <h3>Elementum purus id ultricies.</h3>
            <hr/>
            <div className="news-meta">
              <span><i class="fa-regular fa-user"></i>Admin</span>
              <span><i class="fa-regular fa-heart"></i> 30</span>
              <span><i class="fa-regular fa-message"></i> 350</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
