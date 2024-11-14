import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials.css';
    
const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <button 
            className={`${className} custom-prev-arrow`} 
            style={{ ...style, display: 'block' }} 
            onClick={onClick}
        >
            Prev
        </button>
    );
};

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <button 
            className={`${className} custom-next-arrow`} 
            style={{ ...style, display: 'block' }} 
            onClick={onClick}
        >
            Next
        </button>
    );
};

const Testimonials = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 500
    };

    return (
        <div className="testimonial-slider-container">
            <Slider {...settings}>
                <div className="testimonial-slide">
                    <img className="testimonial-image" src="https://demo.ovathemewp.com/meup/wp-content/uploads/2019/09/about_team_5-1.jpg" alt="Testimonial 1" />
                    <blockquote className="testimonial-quote">
                        <p>“Their services are among the best to be honest. Making everything simple and easy, even for beginners and novices like me and my family.”</p>
                    </blockquote>
                    <p className="testimonial-name">Gregory Kennedy</p>
                    <p className="testimonial-title">Developer</p>
                </div>

                <div className="testimonial-slide">
                    <img className="testimonial-image" src="https://demo.ovathemewp.com/meup/wp-content/uploads/2019/09/about_team_5-1.jpg" alt="Testimonial 2" />
                    <blockquote className="testimonial-quote">
                        <p>“Working with them has been fantastic. Highly professional and great at communication.”</p>
                    </blockquote>
                    <p className="testimonial-name">Sarah Jones</p>
                    <p className="testimonial-title">Project Manager</p>
                </div>

                <div className="testimonial-slide">
                    <img className="testimonial-image" src="https://demo.ovathemewp.com/meup/wp-content/uploads/2019/09/about_team_6-1.jpg" alt="Testimonial 3" />
                    <blockquote className="testimonial-quote">
                        <p>“I recommend them to everyone! My experience has been top-notch every time.”</p>
                    </blockquote>
                    <p className="testimonial-name">Michael Lee</p>
                    <p className="testimonial-title">Marketing Specialist</p>
                </div>
            </Slider>
        </div>
    );
};

export default Testimonials;
