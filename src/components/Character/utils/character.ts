import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  _renderer: THREE.WebGLRenderer,
  _scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>((resolve, reject) => {
      const onLoaded = (gltf: GLTF) => {
        const character = gltf.scene;
        character.traverse((child: any) => {
          if (child.isMesh) {
            const mesh = child as THREE.Mesh;
            child.castShadow = false;
            child.receiveShadow = false;
            mesh.frustumCulled = false;
          }
        });
        resolve(gltf);
        setCharTimeline(character, camera);
        setAllTimeline();
        const footR = character.getObjectByName("foot.R") || character.getObjectByName("footR");
        if (footR) footR.position.y = 3.36;
        const footL = character.getObjectByName("foot.L") || character.getObjectByName("footL");
        if (footL) footL.position.y = 3.36;
        dracoLoader.dispose();
      };

      // Try loading the direct .glb file first for maximum speed & reliability
      loader.load(
        "/models/character.glb",
        onLoaded,
        undefined,
        async (error) => {
          console.warn("Direct GLB load failed, trying decrypted fallback:", error);
          try {
            const encryptedBlob = await decryptFile(
              "/models/character.enc",
              "Character3D#@"
            );
            const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));
            loader.load(blobUrl, onLoaded, undefined, (fallbackErr) => {
              console.error("Fallback load failed:", fallbackErr);
              reject(fallbackErr);
            });
          } catch (err) {
            reject(err);
            console.error("Decryption failed:", err);
          }
        }
      );
    });
  };

  return { loadCharacter };
};

export default setCharacter;
