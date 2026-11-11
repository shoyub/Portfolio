import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";
import { config } from "../config";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Initialize Lenis smooth scroll
    lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.5,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on("scroll", ({ scroll }: { scroll: number }) => {
      setIsScrolled(scroll > 30);
      ScrollTrigger.update();
    });

    document.body.style.overflowY = "auto";
    lenis.start();

    let rafId: number;
    function raf(time: number) {
      lenis?.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Handle navigation links only for anchor hash sections
    let links = document.querySelectorAll(".header ul a[data-href]");
    const clickHandlers: Array<{ el: HTMLAnchorElement; fn: (e: Event) => void }> = [];
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      const fn = (e: Event) => {
        let section = element.getAttribute("data-href");
        if (section) {
          e.preventDefault();
          const target = document.querySelector(section) as HTMLElement;
          if (target) {
            if (lenis && window.innerWidth > 768) {
              lenis.scrollTo(target, {
                offset: -40,
                duration: 1.4,
              });
            } else {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }
        }
      };
      element.addEventListener("click", fn);
      clickHandlers.push({ el: element, fn });
    });

    const onResize = () => {
      lenis?.resize();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", onResize);
      clickHandlers.forEach(({ el, fn }) => el.removeEventListener("click", fn));
      lenis?.destroy();
    };
  }, []);

  return (
    <>
      <div className={`header ${isScrolled ? "header-scrolled" : ""}`}>
        <div className="navbar-left">
          <a href="/#" className="navbar-title" data-cursor="disable">
            SK
          </a>
          <a
            href={`mailto:${config.contact.email}`}
            className="navbar-connect"
            data-cursor="disable"
          >
            {config.contact.email}
          </a>
        </div>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#career" href="#career">
              <HoverLinks text="EXPERIENCE" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-resume-link"
              data-cursor="disable"
            >
              <HoverLinks text="RESUME" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
