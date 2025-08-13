import React from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testimonials = () => {

  const slider = useRef(null);

  let tx = 0;

  const slideForward = () => {
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = () => {
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className="testimonials" name="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Lebron James</h3>
                  <span>Edusity, Los Angeles</span>
                </div>
              </div>
              <p>
                Edusity has transformed the way I learn. The interactive
                platform and expert instructors make all the difference!"
              </p>
            </div>
          </li>


          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Michael Jordan</h3>
                  <span>Edusity, Chicago</span>
                </div>
              </div>
              <p>
                "The courses are well-structured and engaging. I highly
                recommend Edusity to anyone looking to enhance their skills."
              </p>
            </div>
          </li>


          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Kobe Bryant</h3>
                  <span>Edusity, Los Angeles</span>
                </div>
              </div>
              <p>
                "Edusity has been a game-changer for my professional growth.
                The mentorship and resources available are top-notch."
              </p>
            </div>
          </li>


          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Kai Suttu</h3>
                  <span>Edusity, Philippines</span>
                </div>
              </div>
              <p>
                "I love the flexibility Edusity offers. I can learn at my own
                pace and still get the support I need."
              </p>
            </div>
          </li>


        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
