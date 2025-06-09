const baseUrl =
  "https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Selected/Exhibition%20and%20Appearances";

const generateImageUrls = (folder, count, customNames) => {
  return customNames
    ? customNames.map((name) => `${baseUrl}/${folder}/${name}`)
    : Array.from({ length: count }, (_, i) => `${baseUrl}/${folder}/${i + 1}`);
};

export const exhibitionData = [
  {
    title: "Art of nature and spring",
    text: "Berlin, Germany March, 2025",
    link: "https://stanisonneartgallery.com/the-art-of-nature-and-spring-exhibition/",
    images: generateImageUrls("Art of nature and spring", 2),
  },
  {
    title: "Concurrence",
    text: "London, UK January, 2025",
    images: generateImageUrls("Concurrence", 16),
  },
  {
    title: "Domestic",
    text: "UK April, 2025",
    link: "https://www.artsteps.com/view/67ced284c9fda5a36847fbb3",
    images: generateImageUrls("Domestic", 4),
  },
  {
    title: "Graduate Art Show",
    text: "London,UK November, 2024",
    images: generateImageUrls("Graduate art SHow", 11),
  },
  {
    title: "Life in my city art festival (LIMCAF)",
    text: "Enugu November, 2021",
    images: generateImageUrls("Life in my City", 6),
  },
  {
    title: "Lights in Shadow",
    text: "Derby,UK December, 2024 ",
    images: generateImageUrls("Lights in Shadow", 8),
  },
  {
    title: "Mini art fare",
    text: "Lagos, Nigeria December, 2021",
    images: generateImageUrls("Mini art fare", 4),
  },
  {
    title: "Our Natural World",
    text: "Liverpool, UK March, 2025",
    images: generateImageUrls("Our Natural World", 3),
  },
  {
    title: "Reroll",
    text: "UK January, 2025",
    images: generateImageUrls("Reroll", 3),
  },
  {
    title: "Upcycling Redefined",
    text: "Abuja, Nigeria September, 2021",
    images: generateImageUrls("Upcycling Redefined", 12),
  },
  {
    title: "Youtube Africa day",
    text: "Lagos, Nigeria May, 2021",
    images: generateImageUrls("Youtube Africa day", 10),
  },
  {
    title: "Open Theme",
    link: "https://art-collide.com/",
    text: "London, UK March, 2025",
    images: [],
  },
];

// export const exhibitionData = [
//   {
//     title: "Art of nature and spring",
//     text: "",
//     images: [
//       "https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Selected/Exhibition%20and%20Appearances/Art%20of%20nature%20and%20spring/1",
//       "https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Selected/Exhibition%20and%20Appearances/Art%20of%20nature%20and%20spring/2",
//     ],
//   },
//   {
//     title: "Concurrence",
//     text: "London,UK January, 2025",
//     images: [
//       "https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Selected/Exhibition%20and%20Appearances/Concurrence/1",
//       "https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Selected/Exhibition%20and%20Appearances/Concurrence/3dcbf623d4586efecd0e3faae216f7bf",
//       "https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Selected/Exhibition%20and%20Appearances/Concurrence/3d6e5e458dffb3e35142b32bd4743351",
//       "https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Selected/Exhibition%20and%20Appearances/Concurrence/4",
//       "https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Selected/Exhibition%20and%20Appearances/Concurrence/5",
//       "https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Selected/Exhibition%20and%20Appearances/Concurrence/6",
//       "https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Selected/Exhibition%20and%20Appearances/Concurrence/7",
//       "https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Selected/Exhibition%20and%20Appearances/Concurrence/8",
//       "https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Selected/Exhibition%20and%20Appearances/Concurrence/9",
//       "https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Selected/Exhibition%20and%20Appearances/Concurrence/10",
//       "https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Selected/Exhibition%20and%20Appearances/Concurrence/11",
//       "https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Selected/Exhibition%20and%20Appearances/Concurrence/12",
//       "https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Selected/Exhibition%20and%20Appearances/Concurrence/13",
//       "https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Selected/Exhibition%20and%20Appearances/Concurrence/14",
//       "https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Selected/Exhibition%20and%20Appearances/Concurrence/15",
//       "https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Selected/Exhibition%20and%20Appearances/Concurrence/16",
//     ],
//   },
//   {
//     title: "Domestic",
//     images: Array.from(
//       { length: 4 },
//       (_, i) =>
//         `https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Selected/Exhibition%20and%20Appearances/Domestic/${i + 1}`
//     ),
//   },
//   {
//     title: "Graduate Art Show",
//     images: Array.from(
//       { length: 11 },
//       (_, i) =>
//         `https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Selected/Exhibition%20and%20Appearances/Graduate%20art%20SHow/${i + 1}`
//     ),
//   },
// ];

export const residencyData = [
  {
    title: "Upcycling Redefined",
    text: "September, 2021",
    images: generateImageUrls("Upcycling Redefined", 12),
  },
  {
    title: "Waste to Wealth",
    text: "Oghara, Delta State May, 2021",
    images: generateImageUrls("Youtube Africa day", 10),
  },
];
