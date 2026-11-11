import { TextSplitter } from "../../utils/textSplitter";
import gsap from "gsap";
import { lenis } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  if (lenis) {
    lenis.start();
  }
  const mainEl = document.getElementsByTagName("main")[0];
  if (mainEl) {
    mainEl.classList.add("main-active");
  }
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 0.5,
  });

  gsap.fromTo(
    [".landing-intro h2", ".landing-intro h1", ".landing-info h3"],
    { opacity: 0, y: 40, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.0,
      filter: "blur(0px)",
      ease: "power3.out",
      y: 0,
      stagger: 0.12,
      delay: 0.2,
    }
  );

  gsap.fromTo(
    [".landing-info-h2", ".landing-h2-info"],
    { opacity: 0, y: 30, filter: "blur(4px)" },
    {
      opacity: 1,
      duration: 1.0,
      filter: "blur(0px)",
      ease: "power3.out",
      y: 0,
      stagger: 0.15,
      delay: 0.4,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.0,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };
  var landingText2 = new TextSplitter(".landing-h2-info", TextProps);
  var landingText3 = new TextSplitter(".landing-h2-info-1", TextProps);
  var landingText4 = new TextSplitter(".landing-h2-1", TextProps);
  var landingText5 = new TextSplitter(".landing-h2-2", TextProps);

  if (landingText2.chars.length > 0 && landingText3.chars.length > 0) {
    LoopText(landingText2, landingText3);
  }
  if (landingText4.chars.length > 0 && landingText5.chars.length > 0) {
    LoopText(landingText4, landingText5);
  }
}

function LoopText(Text1: TextSplitter, Text2: TextSplitter) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.chars,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1.chars,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2.chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
