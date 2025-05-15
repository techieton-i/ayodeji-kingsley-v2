// import { motion } from "framer-motion";

// export default function Biography() {
//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">
//       {/* Sidebar Nav */}
//       <aside className="md:w-1/4 bg-white p-4 sticky top-0 h-fit border-r border-gray-200">
//         <nav className="space-y-4 text-lg">
//           <a href="#about" className="text-gray-800 hover:underline">
//             About the Artist
//           </a>
//           <a href="#statement" className="text-gray-800 hover:underline">
//             Personal Statement
//           </a>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="md:w-3/4 p-6 space-y-16">
//         {/* Header with background or portrait */}
//         <section className="relative w-full h-64 bg-gray-200 rounded-xl overflow-hidden">
//           <img
//             src="/images/artist-portrait.jpg" // Replace with actual image
//             alt="Artist Portrait"
//             className="w-full h-full object-cover opacity-90"
//           />
//           <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//             <h1 className="text-white text-3xl md:text-5xl font-semibold">
//               Biography
//             </h1>
//           </div>
//         </section>

//         {/* About the Artist */}
//         <motion.section
//           id="about"
//           className="space-y-4"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-2xl font-bold text-gray-800">About the Artist</h2>
//           <p className="text-gray-700 text-base leading-relaxed">
//             [Insert detailed background about the artist here: education,
//             cultural influences, early interest in art, career path, styles,
//             media, exhibitions, etc.]
//           </p>
//         </motion.section>

//         {/* Personal Statement */}
//         <motion.section
//           id="statement"
//           className="space-y-4"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//         >
//           <h2 className="text-2xl font-bold text-gray-800">
//             Personal Statement
//           </h2>
//           <p className="text-gray-700 text-base leading-relaxed">
//             [Insert a personal message from the artist here: philosophy,
//             motivation, relationship to their work, what they hope viewers feel,
//             ongoing questions or themes explored, etc.]
//           </p>
//         </motion.section>
//       </main>
//     </div>
//   );
// }

// import { motion } from "framer-motion";
// import { useEffect } from "react";

// export default function Biography() {
//   // Smooth scroll on internal nav click
//   useEffect(() => {
//     const links = document.querySelectorAll("a[href^='#']");
//     links.forEach((link) => {
//       link.addEventListener("click", (e) => {
//         e.preventDefault();
//         const targetId = link.getAttribute("href")?.substring(1);
//         const target = document.getElementById(targetId);
//         if (target) {
//           target.scrollIntoView({ behavior: "smooth" });
//         }
//       });
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-100">
//       {/* Header Section */}
//       <section className="relative w-full h-[60vh] bg-gray-200 dark:bg-gray-800 overflow-hidden">
//         <img
//           src="https://img.freepik.com/free-photo/close-up-welder-work_23-2151933426.jpg?t=st=1743273409~exp=1743277009~hmac=867f08542589e57f2c21a742c3f36ecf9f18905e45afe8b8c0c40a17e81d8a81&w=1800"
//           alt="Artist Hero"
//           className="w-full h-full object-cover opacity-90"
//         />
//         <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//           <h1 className="text-4xl md:text-6xl font-bold text-white">
//             Biography
//           </h1>
//         </div>
//       </section>

//       <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
//         {/* Sidebar Navigation */}
//         <aside className="md:w-1/4 px-4 md:px-0 md:pl-8 pt-8 sticky top-20 h-fit">
//           <nav className="space-y-4 text-lg font-medium">
//             <a href="#about" className="block hover:underline">
//               About the Artist
//             </a>
//             <a href="#statement" className="block hover:underline">
//               Personal Statement
//             </a>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="md:w-3/4 p-4 space-y-16">
//           {/* About Section */}
//           <motion.section
//             id="about"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="space-y-6"
//           >
//             <h2 className="text-3xl font-bold border-b pb-2">
//               About the Artist
//             </h2>
//             <div className="grid md:grid-cols-2 gap-6">
//               <img
//                 src="https://img.freepik.com/free-photo/close-up-welder-work_23-2151933426.jpg?t=st=1743273409~exp=1743277009~hmac=867f08542589e57f2c21a742c3f36ecf9f18905e45afe8b8c0c40a17e81d8a81&w=1800"
//                 alt="About the Artist"
//                 className="rounded-lg shadow-md object-cover w-full h-auto"
//               />
//               <p className="leading-relaxed text-base">
//                 Jane Doe is a contemporary artist whose work explores the
//                 intersection of memory, identity, and materiality. Her journey
//                 began in the vibrant art communities of Lagos before earning her
//                 MFA in Visual Arts in Berlin. With over 10 solo exhibitions and
//                 awards in global competitions, her work has gained international
//                 recognition.
//               </p>
//             </div>
//           </motion.section>

//           {/* Personal Statement */}
//           <motion.section
//             id="statement"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, delay: 0.1 }}
//             className="space-y-6"
//           >
//             <h2 className="text-3xl font-bold border-b pb-2">
//               Personal Statement
//             </h2>
//             <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
//               <p className="text-base leading-relaxed italic">
//                 "I believe that art is not merely a form of expression but a
//                 bridge between worlds — a visual dialogue between the seen and
//                 the unseen. My work is inspired by the fragments of stories,
//                 fabrics, and landscapes I have encountered through my travels
//                 and heritage. Every brushstroke is a negotiation between control
//                 and spontaneity. I aim to evoke not just thought but feeling,
//                 not just recognition but reflection."
//               </p>
//             </div>
//           </motion.section>
//         </main>
//       </div>
//     </div>
//   );
// }

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useEffect, useRef } from "react";
// // import Timeline from "../components/Timeline"; // Separate component for timeline

// export default function Biography() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({ container: containerRef });
//   const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   useEffect(() => {
//     const links = document.querySelectorAll("a[href^='#']");
//     links.forEach((link) => {
//       link.addEventListener("click", (e) => {
//         e.preventDefault();
//         const targetId = link.getAttribute("href")?.substring(1);
//         const target = document.getElementById(targetId);
//         if (target) {
//           target.scrollIntoView({ behavior: "smooth" });
//         }
//       });
//     });
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="min-h-screen bg-[#fefcfb] text-gray-800 dark:bg-gray-950 dark:text-gray-100"
//     >
//       {/* Scroll progress bar */}
//       <motion.div
//         className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-50"
//         style={{ scaleX }}
//       />

//       {/* Hero Section */}
//       <section className="relative w-full h-[80vh] overflow-hidden bg-[#f3efe9]">
//         <img
//           src="https://img.freepik.com/free-photo/close-up-welder-work_23-2151933426.jpg?t=st=1743273409~exp=1743277009~hmac=867f08542589e57f2c21a742c3f36ecf9f18905e45afe8b8c0c40a17e81d8a81&w=1800"
//           alt="Hero Artist"
//           className="w-full h-full object-cover mix-blend-multiply opacity-80"
//         />
//         <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-6">
//           <h1 className="text-5xl md:text-7xl font-bold text-white mix-blend-screen tracking-wide">
//             Meet the Artist
//           </h1>
//           <p className="text-white mt-4 text-lg md:text-xl max-w-2xl">
//             Explore the story, vision, and journey behind the canvas.
//           </p>
//         </div>
//       </section>

//       <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
//         {/* Sidebar Navigation */}
//         <aside className="md:w-1/4 px-4 md:px-0 md:pl-8 pt-8 sticky top-20 h-fit">
//           <nav className="space-y-4 text-lg font-medium">
//             <a href="#about" className="block hover:underline">
//               About the Artist
//             </a>
//             <a href="#statement" className="block hover:underline">
//               Personal Statement
//             </a>
//             <a href="#timeline" className="block hover:underline">
//               Career Timeline
//             </a>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="md:w-3/4 p-4 space-y-24">
//           {/* About the Artist */}
//           <motion.section
//             id="about"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="space-y-6"
//           >
//             <h2 className="text-4xl font-bold underline decoration-wavy decoration-pink-400">
//               About the Artist
//             </h2>
//             <div className="grid md:grid-cols-2 gap-8">
//               <img
//                 src="https://img.freepik.com/free-photo/close-up-welder-work_23-2151933426.jpg?t=st=1743273409~exp=1743277009~hmac=867f08542589e57f2c21a742c3f36ecf9f18905e45afe8b8c0c40a17e81d8a81&w=1800"
//                 alt="Artist profile"
//                 className="rounded-xl shadow-2xl border border-gray-200 object-cover w-full h-auto"
//               />
//               <p className="text-lg leading-relaxed font-light">
//                 Jane Doe is a multi-disciplinary artist whose work channels
//                 memory and material. Raised between continents, she blends found
//                 objects, paint, and digital mediums to evoke nostalgia and
//                 radical softness. Her practice centers around cultural hybridity
//                 and feminine strength. Exhibited globally, she is a recipient of
//                 several prestigious fellowships and residencies.
//               </p>
//             </div>
//           </motion.section>

//           {/* Personal Statement */}
//           <motion.section
//             id="statement"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//             className="space-y-6"
//           >
//             <h2 className="text-4xl font-bold underline decoration-wavy decoration-rose-300">
//               Personal Statement
//             </h2>
//             <div className="bg-[#fcf4ec] dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
//               <blockquote className="italic text-lg">
//                 "Art is how I remember, process, and dream. It’s the language of
//                 emotion, vibration, and transformation. In every layer and
//                 color, I search for clarity in chaos. I hope my work inspires
//                 pause and empathy — an invitation to see beauty not as
//                 perfection but as presence."
//               </blockquote>
//             </div>
//           </motion.section>

//           {/* Timeline Section (can be commented out if not used) */}
//           {/* <motion.section
//             id="timeline"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-6"
//           >
//             <h2 className="text-4xl font-bold underline decoration-wavy decoration-indigo-400">
//               Career Timeline
//             </h2>
//             <Timeline />
//           </motion.section> */}
//         </main>
//       </div>
//     </div>
//   );
// }

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
// import Timeline from '../components/Timeline'; // Visual timeline for career or education

export default function Biography() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#111827] text-gray-100 font-mono"
    >
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-yellow-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="relative w-full h-[90vh] bg-cover bg-center bg-[url('https://img.freepik.com/free-photo/close-up-welder-work_23-2151933426.jpg?t=st=1743273409~exp=1743277009~hmac=867f08542589e57f2c21a742c3f36ecf9f18905e45afe8b8c0c40a17e81d8a81&w=1800')]">
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-6xl md:text-8xl font-black uppercase text-yellow-400 tracking-wider drop-shadow-lg">
            Forge of Expression
          </h1>
          <p className="text-gray-200 mt-4 text-lg md:text-2xl max-w-2xl">
            Where metal meets memory — the story behind the sparks.
          </p>
        </div>
      </section>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 md:px-12 py-12">
        {/* Sidebar Navigation */}
        <aside className="md:w-1/4 mb-10 md:mb-0 sticky top-20">
          <nav className="space-y-4 text-lg font-semibold text-yellow-400">
            <a href="#about" className="block hover:underline">
              About
            </a>
            <a href="#statement" className="block hover:underline">
              Statement
            </a>
            <a href="#timeline" className="block hover:underline">
              Milestones
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="md:w-3/4 space-y-24">
          {/* About the Artist */}
          <motion.section
            id="about"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-extrabold border-b-4 border-yellow-400 inline-block">
              About the Artist
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img
                src="https://img.freepik.com/free-photo/close-up-welder-work_23-2151933426.jpg?t=st=1743273409~exp=1743277009~hmac=867f08542589e57f2c21a742c3f36ecf9f18905e45afe8b8c0c40a17e81d8a81&w=1800"
                alt="Scrap metal artist"
                className="rounded-lg shadow-2xl border border-gray-700 object-cover w-full h-auto"
              />
              <p className="text-lg leading-relaxed text-gray-300">
                Alex Forge is a sculptor and installation artist transforming
                reclaimed metal into bold statements of identity and survival.
                With a background in mechanical design, Alex embraces the
                rawness of discarded machinery, reimagining its form into
                compelling contemporary art. Their work has been exhibited in
                industrial spaces and international galleries alike.
              </p>
            </div>
          </motion.section>

          {/* Personal Statement */}
          <motion.section
            id="statement"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-extrabold border-b-4 border-yellow-400 inline-block">
              Personal Statement
            </h2>
            <div className="bg-[#1f2937] p-6 rounded-xl border border-gray-700">
              <blockquote className="italic text-lg text-gray-300">
                "To weld is to weave memory into metal — to honor the discarded
                and amplify the overlooked. My art is forged in contradiction:
                sharp yet soft, cold yet burning with story. Through every
                spark, I uncover strength in rust, and rebirth in scrap."
              </blockquote>
            </div>
          </motion.section>

          {/* Visual Timeline */}
          {/* <motion.section
            id="timeline"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-extrabold border-b-4 border-yellow-400 inline-block">Milestones</h2>
            <Timeline />
          </motion.section> */}
        </main>
      </div>
    </div>
  );
}
