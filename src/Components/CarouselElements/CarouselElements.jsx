import Carousel from "react-multi-carousel";
import './CarouselElements.css'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};


// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const CarouselElements = ({ backImages, deviceType }) => {
   
    const images = [
        process.env.REACT_APP_API_URL + backImages.images[0],
        process.env.REACT_APP_API_URL + backImages.images[1],
        process.env.REACT_APP_API_URL + backImages.images[2],
        process.env.REACT_APP_API_URL + backImages.images[3],
        

      ];
      console.log(images);
  return (
   <Carousel
      ssr
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
    >
      {images.slice(0, 5).map((image, index) => {
        return (
          <div key={index} className="images-container">
            <img
              draggable={false}
              alt="text"
              className="carousel-image"
              src={image}
            />
          
             
            
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselElements;