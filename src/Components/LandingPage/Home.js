import React from "react";
import "./Home.css";
import homeimg from "./imgs/home-img.png";
import aboutimg from "./imgs/about-img.png";
import ficon1 from "./imgs/f-icon1.png";
import ficon2 from "./imgs/f-icon2.png";
import ficon3 from "./imgs/f-icon3.png";
import contactimg from "./imgs/contact-img.png";
import pic1 from "./imgs/pic1.png";
import pic2 from "./imgs/pic2.png";
import pic3 from "./imgs/pic3.png";
import { Navigate } from "react-router-dom";
function Home() {
   if (localStorage.getItem("token") == null) {
     return <Navigate to="/login" />;
   }
   const logout_1 = () => {
     localStorage.clear();
     refreshPage();
     function refreshPage() {
       window.location.reload(false);
     }
   };
  return (
    <div>
      <header>
        <a href="#" className="logo">
          <span>ClaimYour</span>Vote
        </a>

        <input type="checkbox" id="menu-bar" />
        <label for="menu-bar" className="fas fa-bars"></label>

        <nav className="navbar">
          <a href="/Home">Home</a>
          <a href="/Home">Features</a>
          {localStorage.getItem("roomid") ? (
            <a href="/Dashboard">Dasboard</a>
          ) : (
            <a href="/Home">About</a>
          )}
          {localStorage.getItem("userid") ? (
            <a href="/Profile">Profile</a>
          ) : (
            <a href="/Home">Rating</a>
          )}

          {localStorage.getItem("userid") ? (
            <a href="/Rooms">Rooms</a>
          ) : (
            <a href="/Register">Register</a>
          )}
          {localStorage.getItem("userid") ? (
            <a onClick={() => logout_1()} href="/Login">
              Logout
            </a>
          ) : (
            <a href="/Login">Login</a>
          )}
        </nav>
      </header>

      <section className="home" id="home">
        <div className="content">
          <h3>
            Get your vote <span>Make your Future</span>
          </h3>
          <p>
            We Provide you to conduct online voting in which every one can claim
            their vote from any where in the world. Claiming your vote makes a
            new future . Come with Us!! We shape the Future
          </p>
          <a href="#" className="btn">
            Register/Login Now
          </a>
        </div>

        <div className="image">
          <img src={homeimg} alt="" />
        </div>
      </section>

      <section className="features" id="features">
        <h1 className="heading"> We Provide You </h1>

        <div className="box-container">
          <div className="box">
            <img src={ficon1} alt="" />
            <h3>Make Rooms For Your Class votings</h3>
            <p>
              We provide you to create a room for your class and volunteer can
              create that will conduct the election and the results will be
              decleared through digitally.
            </p>
            <a href="#" className="btn">
              Create
            </a>
          </div>

          <div className="box">
            <img src={ficon2} alt="" />
            <h3>Make Rooms For Your Campus votings</h3>
            <p>
              We provide you to create a room for your Campus and volunteer can
              create that ,will conduct the election and the results will be
              decleared through digitally.
            </p>
            <a href="#" className="btn">
              Register
            </a>
          </div>

          <div className="box">
            <img src={ficon3} alt="" />
            <h3>Make Rooms to elect your Political Leader</h3>
            <p>
              We provide you to create a room for your Local Area and volunteer
              can create that,will conduct the election and the results will be
              decleared through digitally.
            </p>
            <a href="#" className="btn">
              Login
            </a>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h1 className="heading"> about the app </h1>

        <div className="column">
          <div className="image">
            <img src={aboutimg} alt="" />
          </div>

          <div className="content">
            <h3>Easy And Perfect Solution For Your Business App</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              placeat deserunt saepe repudiandae veniam soluta minima dolor hic
              aperiam iure.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium, quaerat. Dolorem ratione saepe magni quo inventore
              porro ab voluptates eos, nam eius provident accusantium, quia
              similique est, repellendus et reiciendis.
            </p>
            <div className="buttons">
              <a href="#" className="btn">
                {" "}
                <i className="fab fa-apple"></i> app store{" "}
              </a>
              <a href="#" className="btn">
                {" "}
                <i className="fab fa-google-play"></i> google-play{" "}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="newsletter">
        <h3>Subscribe For New Features</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed
          aliquam quibusdam neque magni magnam est laborum doloribus, facere
          dolores.
        </p>
        <form action="">
          <input type="email" placeholder="enter your email" />
          <input type="submit" value="Subscribe" />
        </form>
      </div>

      <section className="review" id="review">
        <h1 className="heading"> people's review </h1>

        <div className="box-container">
          <div className="box">
            <i className="fas fa-quote-right"></i>
            <div className="user">
              <img src={pic1} alt="" />
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="comment">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus et, perspiciatis nisi tempore aspernatur accusantium
                sed distinctio facilis aperiam laborum autem earum repellat,
                commodi eum. Ullam cupiditate expedita officiis obcaecati?
              </div>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-quote-right"></i>
            <div className="user">
              <img src={pic2} alt="" />
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <div className="comment">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus et, perspiciatis nisi tempore aspernatur accusantium
                sed distinctio facilis aperiam laborum autem earum repellat,
                commodi eum. Ullam cupiditate expedita officiis obcaecati?
              </div>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-quote-right"></i>
            <div className="user">
              <img src={pic3} alt="" />
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="comment">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus et, perspiciatis nisi tempore aspernatur accusantium
                sed distinctio facilis aperiam laborum autem earum repellat,
                commodi eum. Ullam cupiditate expedita officiis obcaecati?
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing" id="pricing">
        <h1 className="heading"> Our Pricing Plans </h1>

        <div className="box-container">
          <div className="box">
            <h3 className="title">basic</h3>
            <div className="price">
              $10<span>/monthly</span>
            </div>
            <ul>
              <li>
                {" "}
                <i className="fas fa-check"></i> 1000+ downloads{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> No transaction fees{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-times"></i> unlimited storage{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-times"></i> 5 downloads{" "}
              </li>
            </ul>
            <a href="#" className="btn">
              check out
            </a>
          </div>

          <div className="box">
            <h3 className="title">standard</h3>
            <div className="price">
              $15<span>/monthly</span>
            </div>
            <ul>
              <li>
                {" "}
                <i className="fas fa-check"></i> 1000+ downloads{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> No transaction fees{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> unlimited storage{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-times"></i> 5 downloads{" "}
              </li>
            </ul>
            <a href="#" className="btn">
              check out
            </a>
          </div>

          <div className="box">
            <h3 className="title">premium</h3>
            <div className="price">
              $25<span>/monthly</span>
            </div>
            <ul>
              <li>
                {" "}
                <i className="fas fa-check"></i> 1000+ downloads{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> No transaction fees{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> unlimited storage{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> 5 downloads{" "}
              </li>
            </ul>
            <a href="#" className="btn">
              check out
            </a>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="image">
          <img src={contactimg} alt="" />
        </div>

        <form action="">
          <h1 className="heading">contact us</h1>

          <div className="inputBox">
            <input type="text" required />
            <label>name</label>
          </div>

          <div className="inputBox">
            <input type="email" required />
            <label>email</label>
          </div>

          <div className="inputBox">
            <input type="number" required />
            <label>phone</label>
          </div>

          <div className="inputBox">
            <textarea required name="" id="" cols="30" rows="10"></textarea>
            <label>message</label>
          </div>

          <input type="submit" className="btn" value="send message" />
        </form>
      </section>

      <div className="footer" style={{ color: "black" }}>
        <div className="box-container">
          <div className="box" style={{ color: "black" }}>
            <h3 style={{ color: "black" }}>about us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              pariatur rerum consectetur architecto ad tempora blanditiis quo
              aliquid inventore a.
            </p>
          </div>

          <div className="box">
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#">features</a>
            <a href="#">about</a>
            <a href="#">review</a>
            <a href="#">pricing</a>
            <a href="#">contact</a>
          </div>

          <div className="box">
            <h3>follow us</h3>
            <a href="#">facebook</a>
            <a href="#">instagram</a>
            <a href="#">pinterest</a>
            <a href="#">twitter</a>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <div className="info">
              <i className="fas fa-phone"></i>
              <p>
                {" "}
                +123-456-7890 <br /> +111-2222-333{" "}
              </p>
            </div>
            <div className="info">
              <i className="fas fa-envelope"></i>
              <p>
                {" "}
                example@gmail.com <br /> example@gmail.com{" "}
              </p>
            </div>
            <div className="info">
              <i className="fas fa-map-marker-alt"></i>
              <p> mumbai, india - 400104 </p>
            </div>
          </div>
        </div>

        <h1 className="credit">
          {" "}
          &copy; copyright @ 2021 by mr. web designer{" "}
        </h1>
      </div>
    </div>
  );
}

export default Home;
