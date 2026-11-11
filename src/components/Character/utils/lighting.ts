import * as THREE from "three";
import { RGBELoader } from "three-stdlib";
import { gsap } from "gsap";

const setLighting = (scene: THREE.Scene) => {
  // Front directional light directly illuminating the character
  const frontLight = new THREE.DirectionalLight(0xffffff, 2.0);
  frontLight.position.set(0, 15, 25);
  scene.add(frontLight);

  // Ambient light for overall fill
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
  scene.add(ambientLight);

  // Backlight for rim effect
  const directionalLight = new THREE.DirectionalLight(0xc7a9ff, 1.5);
  directionalLight.position.set(-0.47, 5, -5);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 50;
  scene.add(directionalLight);

  // Desk monitor light
  const pointLight = new THREE.PointLight(0xc2a4ff, 0, 100, 3);
  pointLight.position.set(3, 12, 4);
  pointLight.castShadow = true;
  scene.add(pointLight);

  new RGBELoader()
    .setPath("/models/")
    .load("char_enviorment.hdr", function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
      scene.environmentIntensity = 0.8;
      scene.environmentRotation.set(5.76, 85.85, 1);
    });

  function setPointLight(screenLight: any) {
    if (screenLight && screenLight.material && screenLight.material.opacity > 0.9) {
      pointLight.intensity = (screenLight.material.emissiveIntensity || 1) * 20;
    } else {
      pointLight.intensity = 0;
    }
  }
  const duration = 2;
  const ease = "power2.inOut";
  function turnOnLights() {
    gsap.to(frontLight, {
      intensity: 2.2,
      duration: duration,
      ease: ease,
    });
    gsap.to(ambientLight, {
      intensity: 1.2,
      duration: duration,
      ease: ease,
    });
    gsap.to(scene, {
      environmentIntensity: 0.8,
      duration: duration,
      ease: ease,
    });
    gsap.to(directionalLight, {
      intensity: 1.8,
      duration: duration,
      ease: ease,
    });
    gsap.to(".character-rim", {
      y: "55%",
      opacity: 1,
      delay: 0.2,
      duration: 2,
    });
  }

  return { setPointLight, turnOnLights };
};

export default setLighting;
