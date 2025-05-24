import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const borderVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Header({ title }) {
  return (
    <motion.div
      className="inline-block relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      <h2 className="text-lg md:text-3xl font-extrabold mb-1">{title}</h2>
      <motion.span
        className="absolute left-0 bottom-0 h-1 bg-yellow-400"
        variants={borderVariants}
      />
    </motion.div>
  );
}

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
      className="min-h-screen dark:bg-[#111827] text-[#111827] dark:text-gray-100 font-mono"
    >
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-yellow-500 origin-left z-50"
        style={{ scaleX }}
      />

      <section className="relative w-full h-[90vh] bg-cover bg-center bg-[url('https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Website%202/Landing%20page/artist-pic-3')]">
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase text-yellow-400 tracking-wider drop-shadow-lg">
            Meet the Artist
          </h1>
          <p className="text-gray-200 mt-4 text-lg md:text-2xl max-w-2xl">
            Discover the mind and spirit behind the art.
          </p>
        </div>
      </section>

      <div className="flex flex-col md:flex-row lg:max-w-[70vw] mx-auto px-4 md:px-12 py-12">
        {/* Sidebar Navigation */}
        <aside className="md:w-1/4 mb-10 md:mb-0 sticky top-[4.2rem] py-2 bg-white dark:bg-[#111827] z-10 dark:drop-shadow-lg">
          <nav className="space-y-4 text-lg font-semibold text-[#111827] dark:text-yellow-400 ">
            <a href="#about" className="block hover:underline ">
              Biography
            </a>
            <a href="#statement" className="block hover:underline">
              Personal Statement
            </a>
          </nav>
        </aside>

        <main className="w-full md:w-3/4 space-y-24">
          <motion.section
            id="about"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Header title="About the Artist" />
            <div className="grid md:grid-cols-1 gap-8 items-center">
              <p className="text-xs sm:text-lg leading-relaxed text-[#111827] dark:text-gray-300 text-justify">
                Ayodeji Kingsley is a Nigerian-born artist based in Derby,
                United Kingdom who predominantly works with metal in his
                sculptures. Ayodeji has a bachelor's degree in chemical
                engineering from Obafemi Awolowo University in Nigeria and a
                master's in environmental control and assessment from the
                University of Derby in the United Kingdom. Ayodeji's artistic
                side was awakened at a young age, and he excelled in fine and
                creative art throughout his basic and secondary education. Over
                the years, he has developed his own imaginative and conceptual
                mind through drawing, paranomasia, making graphic illustrations
                and, most recently, sculpting. Initially, to supplement his
                income during university, his digital art practice began as a
                creative outlet and source of extra cash. However, the act of
                creation was far more than a mere means to an end. After
                completing his first degree, he consciously transitioned from a
                part-time pursuit to a dedicated artistic career by taking
                tutelage from artists in the country, self-development, and
                attending exhibitions. As a passionate environmentalist/artist
                motivated by a deep fascination with salvaged metals' raw power
                and inherent beauty, Ayodeji has worked on a pre-existing art
                concept but a different expression lens. He has thought through
                and taught the magnificent use of what others see as waste,
                bringing them together in the praxis of pleasing aesthetics to
                express familiar ideas and entities such as animals, tools,
                items and lots more. He transforms discarded machinery, tools,
                and industrial detritus into evocative sculptures that explore
                themes of decay, rebirth, and the cyclical nature of existence.
                Ayodeji Kingsley infuses mediums to facilitate an interface
                between the subject and the viewer. Ayodeji draws inspiration
                from various sources, including everyday situations, nature,
                personal beliefs, and communication with other artists. The
                principal themes in his works are surrealism, paronomasia and
                deeply entrenched African Proverbs. He strives to express these
                elements in his psychological approach to his artistic
                expression—a perfect reflection of the evolving and
                kaleidoscopic world around us. Throughout his career, Ayodeji
                has created a remarkable body of work that has received
                widespread recognition. His works have been shown in a variety
                of shows and galleries, both online and in person, across the
                globe. He has completed several commissioned works, including
                public sculptures in his home country, Nigeria. His work has
                captivated audiences across multiple platforms.
              </p>
              <img
                src="https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Website%202/Landing%20page/artist-pic-1"
                alt="Scrap metal artist"
                className="rounded-lg shadow-2xl border border-gray-700 object-cover w-full h-auto"
              />
            </div>
          </motion.section>

          <motion.section
            id="statement"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            <Header title="Personal Statement" />
            <div className="bg-[#1f2937] p-2 sm:p-6 rounded-xl border border-gray-700">
              <blockquote className="italic text-sm sm:text-lg text-gray-300 text-justif">
                My sculptures invite the viewer to explore the depths of the
                human psyche. I aim to evoke a sense of wonder and
                introspection, inviting viewers to connect with their
                subconscious. By blending surrealism, paronomasia, and proverbs,
                I seek to challenge traditional notions of form and meaning. My
                work is a visual language, a dialogue between the artist and the
                viewer as I invite you to navigate through my mind's eye, to
                experience the world as I see it, filtered through the lens of
                imagination and emotion. The intricate patterns and textures
                inspire me in nature, and I strive to incorporate these elements
                into my sculptures. By combining the raw power of metal with the
                delicate beauty of organic forms, I create strong and sensitive
                pieces. Each sculpture manifests my thoughts and feelings, a
                tangible representation of the intangible. Each sculpture is a
                testament to the power of human ingenuity and the beauty of the
                natural world.  The process of creating these sculptures is a
                meditative journey. I find solace in shaping, moulding, and
                bringing form to formlessness. It is a way to connect with the
                divine and appreciate the world's beauty and complexity. In a
                world adapting to the consequences of unrestrained consumption,
                my art poignantly reflects our interconnectedness with the
                environment. I utilize discarded metals, remnants of a society
                obsessed with material acquisition, transforming them into
                sculptures and installations that challenge our perceptions of
                waste and inspire a deeper understanding of our ecological
                footprint. By breathing new life into discarded materials, I
                strive to highlight the inherent value in discarded objects and
                advocate for a more sustainable and equitable future while
                addressing other necessary societal issues. Art has the power to
                transform lives. It can inspire, console, and provoke thought. I
                hope my sculptures will leave a lasting impression on viewers,
                encouraging them to look beyond the surface and delve deeper
                into their consciousness.
              </blockquote>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
