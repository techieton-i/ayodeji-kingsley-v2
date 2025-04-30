import ImageGrid from "@/components/ImageGrid";
import { galleryData } from "@/data/galleryData";
import React from "react";

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <ImageGrid images={galleryData} />
    </div>
  );
};

export default Gallery;
