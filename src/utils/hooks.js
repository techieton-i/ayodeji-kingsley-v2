import { encode } from "blurhash";
import { useEffect, useRef, useState } from "react";

export const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};

/* Focus trap hook */
export const useFocusTrap = (isOpen, menuRef, toggleButtonRef) => {
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

    // Focus first element when menu opens
    firstElement.focus();

    document.addEventListener("keydown", handleTabKey);

    return () => {
      document.removeEventListener("keydown", handleTabKey);
      // Return focus to toggle button when menu closes
      toggleButtonRef.current?.focus();
    };
  }, [isOpen, menuRef, toggleButtonRef]);
};

export const useLazyLoad = (options = {}) => {
  const ref = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [blurhash, setBlurhash] = useState(
    "UADk_PnOm*?G0}Ri0eb_~qE1nN-;xBobnP%3"
  );
  const [aspectRatio, setAspectRatio] = useState(1);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.unobserve(entry.target);

          // Create blurred placeholder
          const canvas = document.createElement("canvas");
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.src = target.src;

          img.onload = () => {
            const originalWidth = img.width;
            const originalHeight = img.height;

            setAspectRatio(originalWidth / originalHeight);

            const size = 32;
            canvas.width = size;
            canvas.height = size;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            ctx.drawImage(img, 0, 0, size, size);
            const imageData = ctx.getImageData(0, 0, size, size);
            const hash = encode(imageData.data, size, size, 4, 4);
            setBlurhash(hash);
          };
        }
      });
    }, options);

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [options]);

  return { ref, isLoaded, blurhash, aspectRatio };
};
