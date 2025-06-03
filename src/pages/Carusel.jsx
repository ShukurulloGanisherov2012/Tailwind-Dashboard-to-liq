import { Carousel } from "@material-tailwind/react";

export default function Carusel() {
  return (
    <Carousel
      autoplay={true}
      autoplayDelay={2500}
      loop={true}
      transition={{ duration: 1.2 }}
      className="rounded-xl h-[500px] w-full"
    >
      <img src="/adi.jpg" alt="image 1" className="h-full w-full object-contain" />
      <img src="/ni.jpg" alt="image 2" className="h-full w-full object-contain" />
      <img src="/adidas.webp" alt="image 3" className="h-full w-full object-contain" />
      <img src="/nike.webp" alt="image 4" className="h-full w-full object-contain" />
      <img src="/tumor.webp" alt="image 5" className="h-full w-full object-contain" />
      <img src="/tum.jpg" alt="image 6" className="h-full w-full object-contain" />
    </Carousel>
  );
}
