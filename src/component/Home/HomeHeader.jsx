import React from "react";
import { TbMarquee } from "react-icons/tb";

const HomeHeader = () => {
  return (
    <div>
      <div className="relative w-full">
        {/* Carousel Container */}
        <div className="carousel w-full">
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
              className="w-full h-[60vh] object-cover rounded-lg"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              {/* <a href="#slide4" className="btn btn-circle"></a>
        <a href="#slide2" className="btn btn-circle"></a> */}
            </div>
          </div>

          {/* Slide 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
              className="w-full h-[60vh] object-cover rounded-lg"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              {/* <a href="#slide1" className="btn btn-circle"></a>
        <a href="#slide3" className="btn btn-circle"></a> */}
            </div>
          </div>

          {/* Slide 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
              className="w-full h-[60vh] object-cover rounded-lg"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              {/* <a href="#slide2" className="btn btn-circle"></a>
        <a href="#slide4" className="btn btn-circle"></a> */}
            </div>
          </div>

          {/* Slide 4 */}
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
              className="w-full h-[60vh] object-cover rounded-lg"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              {/* <a href="#slide3" className="btn btn-circle">❮</a>
        <a href="#slide1" className="btn btn-circle">❯</a> */}
            </div>
          </div>
        </div>

        {/* Dots Indicators */}
        <div className="flex justify-center w-full py-2 gap-2 mt-2">
          <a href="#slide1" className="btn btn-xs">
            1
          </a>
          <a href="#slide2" className="btn btn-xs">
            2
          </a>
          <a href="#slide3" className="btn btn-xs">
            3
          </a>
          <a href="#slide4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
