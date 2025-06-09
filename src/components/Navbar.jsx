import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BrandLogo } from "./BrandLogo";
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle, isOpen, isHomepage }) => (
  <button
    className="outline-none border-none select-none cursor-pointer absolute  top-6 right-6 w-10 h-10 text-metal-100 hover:scale-120 transition p-2"
    onClick={toggle}
    aria-expanded={isOpen}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    style={{ color: isHomepage ? "#fff" : "#000" }}
  >
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      className={isHomepage ? "#fff" : "#000"}
    >
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

// Animation variants
const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: { type: "spring", stiffness: 20, restDelta: 2 },
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 40px) 30px)",
    transition: { delay: 0.2, type: "spring", stiffness: 400, damping: 40 },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

// Custom hook
const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};

// Focus trap hook
const useFocusTrap = (isOpen, menuRef, toggleButtonRef) => {
  useEffect(() => {
    if (!isOpen) return;

    const focusableElements =
      menuRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) || [];

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    firstElement.focus();
    document.addEventListener("keydown", handleTabKey);

    return () => {
      document.removeEventListener("keydown", handleTabKey);
      toggleButtonRef.current?.focus();
    };
  }, [isOpen, menuRef, toggleButtonRef]);
};

// Main component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  const textColorClass = isHomepage ? "text-white" : "text-metal-900";
  const hoverTextColorClass = isHomepage
    ? "hover:text-rust-300"
    : "hover:text-rust-500";
  const borderColorClass = isHomepage ? "border-rust-400" : "border-rust-500";

  useFocusTrap(isOpen, menuRef, toggleButtonRef);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "Collections",
    "Gallery",
    "TAK",
    "Biography",
    "Contact",
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 left-0 w-full z-20 transition-all duration-300 ${
        isScrolled
          ? isHomepage
            ? " bg-metal-900 shadow-lg"
            : "bg-white shadow-lg"
          : isHomepage
            ? "bg-metal-900"
            : "bg-white shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className={`text-3xl font-bold transition-colors ${
            isHomepage
              ? "text-white hover:text-rust-300"
              : "text-metal-900 hover:text-rust-500"
          }`}
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: "1px",
          }}
        >
          <div className="w-[9rem]">
            <BrandLogo />
          </div>
        </Link>

        {/* Desktop Navigation - Improved Contrast */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={`/${item.toLowerCase()}`}
              className={`font-medium px-3 py-2 rounded-md relative group text-lg transition-colors ${
                isHomepage ? "text-white" : "text-metal-900"
              } ${hoverTextColorClass}`}
            >
              {item}
              <span
                className={`absolute bottom-0 left-0 w-0 h-1 transition-all duration-300 group-hover:w-full ${
                  isHomepage ? "bg-rust-400" : "bg-rust-500"
                }`}
              ></span>
            </NavLink>
          ))}
        </div>

        {/* Mobile Navigation Toggle - More Visible */}
        {/* <div className="md:hidden">
          <button
            ref={toggleButtonRef}
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="text-white hover:text-rust-300 transition-colors p-2 bg-metal-700 rounded-md"
          >
            {isOpen ? (
              <X size={28} strokeWidth={2.5} />
            ) : (
              <Menu size={28} strokeWidth={2.5} />
            )}
          </button>
        </div> */}
      </div>

      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div
          ref={menuRef}
          className={`fixed md:hidden top-0 right-0 shadow-2xl border-l ${
            isHomepage
              ? "bg-metal-900 border-metal-600"
              : "bg-white border-metal-200"
          }`}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "100vh",
            width: "min(80vw, 320px)",
          }}
          variants={sidebarVariants}
          aria-hidden={!isOpen}
        >
          <motion.ul
            className="p-8 pt-32 space-y-8"
            variants={{
              open: {
                transition: { staggerChildren: 0.07, delayChildren: 0.2 },
              },
              closed: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 },
              },
            }}
          >
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex justify-end"
              >
                <NavLink
                  to={`${item.toLowerCase()}`}
                  className={`text-2xl font-bold px-4 py-3 w-full text-right border-r-4 ${
                    isHomepage
                      ? "text-white hover:text-rust-300 border-rust-400"
                      : "text-metal-900 hover:text-rust-500 border-rust-600"
                  }`}
                  tabIndex={isOpen ? 0 : -1}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
          <MenuToggle
            toggle={toggleMenu}
            isOpen={isOpen}
            isHomepage={isHomepage}
          />
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
