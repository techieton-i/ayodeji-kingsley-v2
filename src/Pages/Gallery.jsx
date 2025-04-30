import ImageGrid from "@/components/ImageGrid";
import React from "react";

const images = [
  {
    id: 1,
    title: "Rustic Elegance",
    src: "https://res.cloudinary.com/dl3haplj1/image/upload/w_1000,f_webp,q_35/v1/ayodeji-kingsley/3musketeers/Herald22021",
  },
  {
    id: 2,
    title: "Industrial Artistry",
    src: "https://res.cloudinary.com/dl3haplj1/image/upload/q_35/f_webp,w_1200/ayodeji-kingsley/3musketeers/Paw-sitive22021.jpg",
  },
  {
    id: 3,
    title: "Nature in Metal",
    src: "https://res.cloudinary.com/dl3haplj1/image/upload/f_webp,q_auto:low,w_700/v1/ayodeji-kingsley/Road%20back%20to%20you/Identity%202021",
  },
  {
    id: 4,
    title: "Nature in Metal",
    src: "https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto:best,w_700/v1/ayodeji-kingsley/Selected/Gallery/Bait%20and%20Switch/71e650f740d483873094f6749b119a69",
  },
];

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <ImageGrid images={images} />
    </div>
  );
};

export default Gallery;
