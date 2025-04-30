import React from "react";
import { useParams } from "react-router-dom";
import CollectionData from "@data/collection.json";
import ImageSlider from "@/components/ImageSlider";

const CollectionDetails = () => {
  const { category } = useParams();

  const selectedCollection = CollectionData[category];

  return (
    <div className="container mx-auto p-4 mt-5">
      <h1 className="text-4xl font-bold text-center mb-10">Art Detail</h1>
      {selectedCollection.map(({ title, images, description }) => (
        <div className="my-10 mb-[5rem] flex flex-col gap-10 text-center items-center w-[60rem] mx-auto">
          <h1 className="text-2xl font-semibold text-gray-700">{title}</h1>
          <ImageSlider images={images} />
          <div>
            <p
              className="text-gray-600 text-base text-justify"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionDetails;
