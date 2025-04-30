// ArtDetail.js
import { useParams } from "react-router-dom";
import ImageSlider from "@/components/ImageSlider";
import ImageGrid from "@/components/ImageGrid";

const artworks = {
  1: {
    title: "Rustic Elegance",
    description:
      "A stunning combination of raw metal and intricate craftsmanship.",
    images: [
      "https://source.unsplash.com/600x400/?metal,sculpture",
      "https://source.unsplash.com/600x400/?rustic,metal",
    ],
  },
  2: {
    title: "Industrial Artistry",
    description:
      "Modern, sleek, and bold metal artwork with an industrial touch.",
    images: [
      "https://source.unsplash.com/600x400/?metal,design",
      "https://source.unsplash.com/600x400/?industrial,metal",
    ],
  },
  3: {
    title: "Nature in Metal",
    description:
      "Metal sculptures inspired by the beauty of nature and wildlife.",
    images: [
      "https://source.unsplash.com/600x400/?metal,nature",
      "https://source.unsplash.com/600x400/?wildlife,metal",
    ],
  },
};

const images = [
  "https://res.cloudinary.com/dl3haplj1/image/upload/f_webp,q_auto:low,w_700/v1/ayodeji-kingsley/Road%20back%20to%20you/Identity%202021",
  "https://res.cloudinary.com/dl3haplj1/image/upload/q_35/f_webp,w_1200/ayodeji-kingsley/3musketeers/Paw-sitive22021.jpg",
  "https://res.cloudinary.com/dl3haplj1/image/upload/w_1000,f_webp,q_35/v1/ayodeji-kingsley/3musketeers/Herald22021",
];

const ArtDetail = () => {
  const { id } = useParams();
  const art = artworks[id];

  if (!art) {
    return <div className="text-center text-gray-600">Artwork not found.</div>;
  }

  return (
    <div className="container mx-auto p-4 mt-5">
      <h1 className="text-4xl font-bold text-center mb-10">Art Details</h1>
      <ImageSlider images={images} />
      <div>
        <p></p>
      </div>
    </div>
  );
};

export default ArtDetail;
