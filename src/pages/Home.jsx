import React from 'react'
import image1 from   '../assets/video1.mp4'
import image2 from   '../assets/video2.mp4'
import image3 from   '../assets/video3.mp4'
import image4 from   '../assets/video4.mp4'
import image5 from   '../assets/video5.mp4'

const Home = () => {
  return (
    <div className="bg-amber-300 grid grid-cols-2 gap-10 ">
      <div
        className="embed-responsive embed-responsive-4by3 relative w-full overflow-hidden  bg-amber-900 "
        style={{ paddingTop: "42.857143%", backgroundColor: "yellow" }}
      >
        <iframe
          className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-amber-900 "
          src={image1}
          allowFullScreen
          data-gtm-yt-inspected-2340190_699="true"
          id={240632615}
        />
      </div>
      <div
        className="embed-responsive embed-responsive-4by3 relative w-full overflow-hidden"
        style={{ paddingTop: "42.857143%" }}
      >
        <iframe
          className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
          src={image2}
          allowFullScreen
          data-gtm-yt-inspected-2340190_699="true"
          id={240632615}
        />
      </div>
      <div
        className="embed-responsive embed-responsive-4by3 relative w-full overflow-hidden"
        style={{ paddingTop: "42.857143%" }}
      >
        <iframe
          className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
          src={image3}
          allowFullScreen
          data-gtm-yt-inspected-2340190_699="true"
          id={240632615}
        />
      </div>
      <div
        className="embed-responsive embed-responsive-4by3 relative w-full overflow-hidden"
        style={{ paddingTop: "42.857143%" }}
      >
        <iframe
          className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
          src={image4}
          allowFullScreen
          data-gtm-yt-inspected-2340190_699="true"
          id={240632615}
        />
      </div>
      <div
        className="embed-responsive embed-responsive-4by3 relative w-full overflow-hidden"
        style={{ paddingTop: "42.857143%" }}
      >
        <iframe
          className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
          src={image5}
          allowFullScreen
          data-gtm-yt-inspected-2340190_699="true"
          id={240632615}
        />
      </div>
    </div>
  );
}

export default Home