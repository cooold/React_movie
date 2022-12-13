import frontImage1 from '../image/AfrontCover1.jpg'
import frontImage2 from '../image/AfrontCover2.png'
import frontImage3 from '../image/AfrontCover3.png'
import './Carousel.css'
const Carousel = () => {
    return(
        <div id="carouselExampleControls" className="carousel slide innerBlace" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img className="center-block" src={frontImage1}  />
          </div>
          <div className="carousel-item">
          <img className="center-block" src={frontImage2}  />
          </div>
          <div className="carousel-item">
          <img className="center-block" src={frontImage3}  />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
}

export default Carousel