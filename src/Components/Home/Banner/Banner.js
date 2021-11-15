import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <Carousel>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/NKR4Y74/banner33.jpg"
            alt="Third slide"/>
          <Carousel.Caption>
            <h1>
              Every pedal leads to stronger you.Let's ride towards immunity!
            </h1>
            <p>- A bicycle ride around the world begins with a single pedal stroke -</p>
          </Carousel.Caption>
        </Carousel.Item>
        

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/NZ8b8LJ/banner22.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>
                It's heavy. It's slow. It will change the world.
            </h1>
            <p>- A bicycle ride around the world begins with a single pedal stroke -</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/RD8Jtbb/banner111.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>
              Every pedal leads to stronger you. Let's ride towards immunity!
            </h1>
            <p>- A bicycle ride around the world begins with a single pedal stroke -</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
<h1>This is banner</h1>;
