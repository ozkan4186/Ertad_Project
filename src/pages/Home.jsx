import React from 'react'
import image1 from   '../assets/video1.mp4'
import image2 from   '../assets/video2.mp4'
import image3 from   '../assets/video3.mp4'
import image4 from   '../assets/video4.mp4'
import image5 from   '../assets/video5.mp4'

const Home = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide carousel-fade relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <video className="w-full" autoPlay loop muted>
            <source src={image1} type="video/mp4" />
          </video>
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-xl">First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <video className="w-full" autoPlay loop muted>
            <source src={image2} type="video/mp4" />
          </video>
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-xl">Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <video className="w-full" autoPlay loop muted>
            <source src={image3} type="video/mp4" />
          </video>
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-xl">Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Home