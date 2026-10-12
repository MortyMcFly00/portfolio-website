{/* Mantine Imports */}
import { Carousel } from "@mantine/carousel";

{/* Slide Imports */}
import BrandSlide from "./slides/BrandSlide";
import AboutSlide from "./slides/AboutSlide";
import FeaturedProjectSlide from "./slides/FeaturedProjectSlide";
import CurrentFocusSlide from "./slides/CurrentFocusSlide";
import ContactSlide from "./slides/ContactSlide";

function PortfolioCarousel() {
    return (
        <Carousel
            withIndicators 
            height={800} 
            w="100%" 
            slideSize="100%"
            slideGap={0}
            loop
            align="start"
            initialSlide={0}
            style={{
                transform: 'scale(1)'
            }} 
        >
            <Carousel.Slide>
                <BrandSlide />
            </Carousel.Slide>

            <Carousel.Slide>
                <AboutSlide />
            </Carousel.Slide>

            <Carousel.Slide>
                <FeaturedProjectSlide />
            </Carousel.Slide>

            <Carousel.Slide>
                <CurrentFocusSlide />
            </Carousel.Slide>

            <Carousel.Slide>
                 <ContactSlide />  
            </Carousel.Slide>

            </Carousel>
    )
}

export default PortfolioCarousel;
