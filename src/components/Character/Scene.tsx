import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import { useLoading, hasLoadedBefore } from "../../context/LoadingProvider";
import handleResize from "./utils/resizeUtils";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";
import { setProgress } from "../Loading";

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const { setLoading } = useLoading();

  const [, setChar] = useState<THREE.Object3D | null>(null);
  useEffect(() => {
    if (canvasDiv.current) {
      let isMounted = true;
      const alreadyLoaded = hasLoadedBefore();
      let rect = canvasDiv.current.getBoundingClientRect();
      let container = {
        width: rect.width || window.innerWidth,
        height: rect.height || window.innerHeight,
      };
      const aspect = container.width / container.height;
      const scene = new THREE.Scene();

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: window.devicePixelRatio < 2,
        powerPreference: "high-performance",
      });
      renderer.setSize(container.width, container.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1;
      canvasDiv.current.appendChild(renderer.domElement);

      const isMobile = container.width <= 768;
      const camera = new THREE.PerspectiveCamera(14.5, aspect, 0.1, 1000);
      camera.position.z = 10;
      camera.position.set(0, 13.1, 24.7);
      camera.zoom = isMobile ? 0.92 : 1.1;
      camera.updateProjectionMatrix();

      let headBone: THREE.Object3D | null = null;
      let screenLight: any | null = null;
      let mixer: THREE.AnimationMixer;
      let loadedCharacter: THREE.Object3D | null = null;

      const clock = new THREE.Clock();

      const light = setLighting(scene);
      let progress = alreadyLoaded
        ? null
        : setProgress((value) => {
            if (isMounted) setLoading(value);
          });
      const { loadCharacter } = setCharacter(renderer, scene, camera);

      const onResize = () => {
        if (loadedCharacter) {
          handleResize(renderer, camera, canvasDiv, loadedCharacter);
        }
      };

      loadCharacter().then((gltf) => {
        if (!isMounted || !gltf) return;
        const animations = setAnimations(gltf);
        hoverDivRef.current && animations.hover(gltf, hoverDivRef.current);
        mixer = animations.mixer;
        let character = gltf.scene;
        loadedCharacter = character;
        setChar(character);
        scene.add(character);
        headBone = character.getObjectByName("spine006") || null;
        screenLight = character.getObjectByName("screenlight") || null;

        if (alreadyLoaded || !progress) {
          light.turnOnLights();
          animations.startIntro();
        } else {
          progress.loaded().then(() => {
            if (!isMounted) return;
            setTimeout(() => {
              if (!isMounted) return;
              light.turnOnLights();
              animations.startIntro();
            }, 2500);
          });
        }
        window.addEventListener("resize", onResize);
      });

      let mouse = { x: 0, y: 0 },
        interpolation = { x: 0.1, y: 0.2 };

      const onMouseMove = (event: MouseEvent) => {
        handleMouseMove(event, (x, y) => (mouse = { x, y }));
      };
      const onTouchStart = (event: TouchEvent) => {
        if (event.touches.length > 0) {
          const mouseX = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
          const mouseY = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
          mouse = { x: mouseX, y: mouseY };
        }
      };

      const onTouchMove = (e: TouchEvent) => {
        handleTouchMove(e, (x, y) => (mouse = { x, y }));
      };

      const onTouchEnd = () => {
        handleTouchEnd((x, y, interpolationX, interpolationY) => {
          mouse = { x, y };
          interpolation = { x: interpolationX, y: interpolationY };
        });
      };

      document.addEventListener("mousemove", onMouseMove);
      const landingDiv = document.getElementById("landingDiv");
      if (landingDiv) {
        landingDiv.addEventListener("touchstart", onTouchStart, { passive: true });
        landingDiv.addEventListener("touchmove", onTouchMove, { passive: true });
        landingDiv.addEventListener("touchend", onTouchEnd, { passive: true });
      }

      let animationFrameId: number;
      const animate = () => {
        if (!isMounted) return;
        animationFrameId = requestAnimationFrame(animate);
        if (headBone) {
          handleHeadRotation(
            headBone,
            mouse.x,
            mouse.y,
            interpolation.x,
            interpolation.y,
            THREE.MathUtils.lerp
          );
          light.setPointLight(screenLight);
        }
        const delta = clock.getDelta();
        if (mixer) {
          mixer.update(delta);
        }
        renderer.render(scene, camera);
      };
      animate();

      return () => {
        isMounted = false;
        cancelAnimationFrame(animationFrameId);
        scene.clear();
        renderer.dispose();
        window.removeEventListener("resize", onResize);
        document.removeEventListener("mousemove", onMouseMove);
        if (
          canvasDiv.current &&
          renderer.domElement.parentNode === canvasDiv.current
        ) {
          canvasDiv.current.removeChild(renderer.domElement);
        }
        if (landingDiv) {
          landingDiv.removeEventListener("touchstart", onTouchStart);
          landingDiv.removeEventListener("touchmove", onTouchMove);
          landingDiv.removeEventListener("touchend", onTouchEnd);
        }
      };
    }
  }, []);

  return (
    <>
      <div className="character-container">
        <div className="character-model" ref={canvasDiv}>
          <div className="character-rim"></div>
          <div className="character-hover" ref={hoverDivRef}></div>
        </div>
      </div>
    </>
  );
};

export default Scene;
