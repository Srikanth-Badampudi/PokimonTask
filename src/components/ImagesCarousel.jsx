import Carousel from "react-bootstrap/Carousel";
import Chips from "./Chips";

function ImagesCarousel({ data }) {
  //let data = ["overgrow", "shrink"];

  console.log("image car ", data);
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-25 h-25"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png?171x180"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>
            Abilities:{" "}
            {data.abilities.length > 0 &&
              data.abilities.map((item, indx) => {
                return <Chips chip={item} key={indx}/>;
              })}
          </h5>
          <p>
            <b>Base experience:</b> 142
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImagesCarousel;
