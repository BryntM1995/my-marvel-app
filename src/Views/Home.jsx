import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./ViewStyle/Home.css";
import firstSlide from "../Assets/across_the_spider-verse.jpg";
import secondSlide from "../Assets/secretInvasion.jpg";
import thirdSlide from "../Assets/guardiansOfGPoster.webp";
import { FaShoppingCart } from "react-icons/fa";
function Home() {
  return (
    <div className="container mb-5">
      <section className="carouselSection">
        <h1 className="postTitle">What are you waiting for? Now Available! </h1>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner ">
            <div className="carousel-item active " data-bs-interval="4000">
              <img src={firstSlide} className="carouselImg" alt="avatar" />
            </div>
            <div className="carousel-item">
              <img src={secondSlide} className="carouselImg" alt="avatar" />
            </div>
            <div className="carousel-item">
              <img src={thirdSlide} className="carouselImg" alt="avatar" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section className="GettingStarted d-grid">
        <div className="mb-5 mt-5">
          <h1 className="text-light portraitText">Gettting Started</h1>
        </div>
        <div>
          <a
            href="https://developer.marvel.com/documentation/getting_started"
            target="_blank"
            type="button"
            className="btn btn-danger ms-3 me-3"
            rel="noreferrer"
          >
            Get restAPI info
          </a>
          <a
            href="https://www.shopdisney.com/marvel-content/?CMP=SYN-MARVELCOM:NAV_MORE"
            target="_blank"
            type="button"
            className="btn btn-danger  ms-3 me-3"
            rel="noreferrer"
          >
            SHOP <FaShoppingCart />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
