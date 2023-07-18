import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./ViewStyle/Home.css";
import firstSlide from "../Assets/across_the_spider-verse.jpg";
import secondSlide from "../Assets/secretInvasion.jpg";
import thirdSlide from "../Assets/guardiansOfGPoster.webp";
import comics from "../Assets/comicss.jpg";
import post from "../Assets/newcomics.jpg"

function Home() {
  return (
    <div className="container-fluid">
      <section className="carouselSection">
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1000">
              <img src={firstSlide} className="Cpost" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className=" text-warning bg-dark">SPIDER-MAN</h5>
                <p className=" text-warning bg-dark">
                  Across the spider-verse since jun 2!
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={secondSlide} className="Cpost" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className=" text-warning bg-dark">SECRET INVASION</h5>
                <p className=" text-warning bg-dark">
                  Already available in DisneyPlus!
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={thirdSlide} className="Cpost" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className=" text-warning bg-dark">GUARDIANS OF THE GALAXY</h5>
                <p className=" text-warning bg-dark">
                  Guardians of the galaxy vol 3 available in DisneyPlus!
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className="mb-4 mt-4 carouselSection2">
      <h1 class="d-inline p-2 text-bg-primary">Good news!!!</h1>
      <img src={post} className="img-fluid border border-primary" alt="..."/>
      </section>
      <section className="mb-4 mt-4 carouselSection3">
      <h1 class="d-inline p-2 text-bg-primary">Iconic Comics !</h1>
      <img src={comics} className="img-fluid border border-primary" alt="..."/>
      </section>
    </div>
  );
}

export default Home;
